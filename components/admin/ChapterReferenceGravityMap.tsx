'use client'

import { useMemo, useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Cell,
} from 'recharts'

export type ChapterReferenceSource = {
  num: string
  title: string
  count: number
}

export type ChapterReferenceRow = {
  targetKey: string
  num: string
  title: string
  referenceCount: number
  sourceChapterCount: number
  sources: ChapterReferenceSource[]
}

type ChartRow = ChapterReferenceRow & {
  name: string
  sourceSummary: string
}

type ViewMode = 'ranked' | 'network'

type NetworkNode = {
  id: string
  num: string
  title: string
  incoming: number
  incomingSources: number
  outgoing: number
  x: number
  y: number
  radius: number
}

type NetworkLink = {
  sourceId: string
  targetId: string
  count: number
}

function truncate(value: string, max: number): string {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value
}

function formatReferences(value: number): string {
  return `${value} reference${value === 1 ? '' : 's'}`
}

function formatSources(value: number): string {
  return `${value} source chapter${value === 1 ? '' : 's'}`
}

function edgePath(source: NetworkNode, target: NetworkNode): string {
  const midX = (source.x + target.x) / 2
  const midY = (source.y + target.y) / 2
  const curve = source.x < target.x ? -34 : 34
  return `M ${source.x} ${source.y} Q ${midX} ${midY + curve} ${target.x} ${target.y}`
}

function nodeTitle(node: NetworkNode): string {
  return `${node.num}. ${node.title}`
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ValueLabel({ x, y, width, height, value }: any) {
  return (
    <text
      x={Number(x) + Number(width) + 7}
      y={Number(y) + Number(height) / 2 + 4}
      fill="rgba(26,26,24,.72)"
      fontSize={11}
      fontFamily="DM Sans, sans-serif"
      fontWeight={650}
      textAnchor="start"
    >
      {formatReferences(Number(value))}
    </text>
  )
}

export default function ChapterReferenceGravityMap({
  rows,
  totalReferences,
  referencedChapterCount,
  analyzedChapterCount,
}: {
  rows: ChapterReferenceRow[]
  totalReferences: number
  referencedChapterCount: number
  analyzedChapterCount: number
}) {
  const chartRows: ChartRow[] = useMemo(() => {
    return rows.map((row) => ({
      ...row,
      name: `${row.num}. ${row.title}`,
      sourceSummary: row.sources
        .map((source) => `${source.num}. ${source.title}${source.count > 1 ? ` (${source.count})` : ''}`)
        .join(', '),
    }))
  }, [rows])

  const centerStage = chartRows[0]
  const widestReach = [...chartRows].sort((a, b) => b.sourceChapterCount - a.sourceChapterCount || b.referenceCount - a.referenceCount)[0]
  const height = Math.max(260, chartRows.length * 42 + 72)
  const [viewMode, setViewMode] = useState<ViewMode>('ranked')
  const network = useMemo(() => {
    const nodeMap = new Map<string, Omit<NetworkNode, 'x' | 'y' | 'radius'>>()
    const outgoingCount = new Map<string, number>()
    const links: NetworkLink[] = []

    for (const row of chartRows) {
      nodeMap.set(row.num, {
        id: row.num,
        num: row.num,
        title: row.title,
        incoming: row.referenceCount,
        incomingSources: row.sourceChapterCount,
        outgoing: 0,
      })

      for (const source of row.sources) {
        if (!nodeMap.has(source.num)) {
          nodeMap.set(source.num, {
            id: source.num,
            num: source.num,
            title: source.title,
            incoming: 0,
            incomingSources: 0,
            outgoing: 0,
          })
        }
        outgoingCount.set(source.num, (outgoingCount.get(source.num) ?? 0) + source.count)
        links.push({
          sourceId: source.num,
          targetId: row.num,
          count: source.count,
        })
      }
    }

    const nodesWithoutPosition = Array.from(nodeMap.values())
      .map((node) => ({
        ...node,
        outgoing: outgoingCount.get(node.id) ?? 0,
      }))
      .sort((a, b) => b.incoming - a.incoming || b.incomingSources - a.incomingSources || Number(a.num) - Number(b.num))

    const maxIncoming = Math.max(1, ...nodesWithoutPosition.map((node) => node.incoming))
    const centerX = 490
    const centerY = 270
    const ringNodes = nodesWithoutPosition.slice(1)
    const innerCount = Math.min(7, ringNodes.length)

    const nodes: NetworkNode[] = nodesWithoutPosition.map((node, index) => {
      const radius = 15 + Math.round((node.incoming / maxIncoming) * 17)

      if (index === 0) {
        return { ...node, x: centerX, y: centerY, radius: Math.max(30, radius + 4) }
      }

      const ringIndex = index - 1
      const isInner = ringIndex < innerCount
      const ringPosition = isInner ? ringIndex : ringIndex - innerCount
      const ringTotal = isInner ? innerCount : Math.max(1, ringNodes.length - innerCount)
      const angle = -Math.PI / 2 + (ringPosition / ringTotal) * Math.PI * 2 + (isInner ? 0 : Math.PI / Math.max(3, ringTotal))
      const ringRadiusX = isInner ? 198 : 350
      const ringRadiusY = isInner ? 132 : 220

      return {
        ...node,
        x: Math.round(centerX + Math.cos(angle) * ringRadiusX),
        y: Math.round(centerY + Math.sin(angle) * ringRadiusY),
        radius,
      }
    })

    return { nodes, links }
  }, [chartRows])
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)
  const selectedNode = network.nodes.find((node) => node.id === selectedNodeId) ?? network.nodes[0]
  const selectedIncomingRows = selectedNode
    ? chartRows
        .find((row) => row.num === selectedNode.id)
        ?.sources ?? []
    : []
  const selectedOutgoingRows = selectedNode
    ? chartRows
        .filter((row) => row.sources.some((source) => source.num === selectedNode.id))
        .map((row) => ({
          num: row.num,
          title: row.title,
          count: row.sources.find((source) => source.num === selectedNode.id)?.count ?? 0,
        }))
    : []

  return (
    <section className="adm-reference-section" aria-labelledby="reference-gravity-heading">
      <div className="adm-chart-card full adm-reference-card">
        <div className="adm-text-analytics-head">
          <div>
            <p className="adm-chart-title" id="reference-gravity-heading">Reference Gravity Map</p>
            <p className="adm-page-sub adm-text-analytics-sub">
              Cross-chapter references are counted from structured links inside the chapter text, then ranked to show which chapters receive the most attention from the rest of the book.
            </p>
          </div>
          <div className="adm-text-analytics-count">{totalReferences} cross-chapter references</div>
        </div>

        <div className="adm-reference-view-toggle" role="tablist" aria-label="Reference visualization">
          <button
            type="button"
            className={viewMode === 'ranked' ? 'active' : ''}
            onClick={() => setViewMode('ranked')}
            aria-pressed={viewMode === 'ranked'}
          >
            Ranked view
          </button>
          <button
            type="button"
            className={viewMode === 'network' ? 'active' : ''}
            onClick={() => setViewMode('network')}
            aria-pressed={viewMode === 'network'}
          >
            Reference Network
          </button>
        </div>

        <div className="adm-reference-summary">
          <div>
            <span>Center stage</span>
            <strong>{centerStage ? centerStage.name : 'No quoted chapter yet'}</strong>
            <em>{centerStage ? formatReferences(centerStage.referenceCount) : '0 references'}</em>
          </div>
          <div>
            <span>Broadest reach</span>
            <strong>{widestReach ? widestReach.name : 'No source spread yet'}</strong>
            <em>{widestReach ? formatSources(widestReach.sourceChapterCount) : '0 source chapters'}</em>
          </div>
          <div>
            <span>Quoted chapters</span>
            <strong>{referencedChapterCount} of {analyzedChapterCount}</strong>
            <em>chapters receiving references</em>
          </div>
        </div>

        {chartRows.length > 0 ? (
          viewMode === 'ranked' ? (
            <div className="adm-reference-layout">
            <div className="adm-reference-chart" style={{ height }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={chartRows}
                  layout="vertical"
                  margin={{ top: 4, right: 92, left: 0, bottom: 8 }}
                  barCategoryGap="28%"
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.12)" horizontal={false} />
                  <XAxis
                    type="number"
                    tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
                    axisLine={false}
                    tickLine={false}
                    allowDecimals={false}
                  />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={220}
                    tick={({ x, y, payload }) => (
                      <text
                        x={x}
                        y={y}
                        dy={4}
                        textAnchor="end"
                        fill="rgba(26,26,24,.68)"
                        fontSize={11}
                        fontFamily="DM Sans, sans-serif"
                      >
                        {truncate(String(payload.value), 32)}
                      </text>
                    )}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    formatter={(value, _name, item) => {
                      const payload = item.payload as ChartRow
                      return [payload.sourceSummary || 'No source detail', formatReferences(Number(value))]
                    }}
                    labelFormatter={(label) => String(label)}
                    contentStyle={{
                      background: '#1a1a18',
                      border: '1px solid rgba(160,124,58,.3)',
                      borderRadius: 3,
                      color: '#f5f0e8',
                      fontSize: 12,
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    labelStyle={{ color: 'rgba(245,240,232,.7)', marginBottom: 6 }}
                    cursor={{ fill: 'rgba(26,26,24,.03)' }}
                  />
                  <Bar dataKey="referenceCount" name="Incoming references" radius={[0, 3, 3, 0]}>
                    <LabelList dataKey="referenceCount" content={(props) => <ValueLabel {...props} />} />
                    {chartRows.map((row, index) => (
                      <Cell
                        key={row.targetKey}
                        fill={index === 0 ? '#a07c3a' : row.sourceChapterCount > 1 ? '#4a6b5a' : '#6d7f72'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="adm-reference-sources" aria-label="Reference source chapters">
              {chartRows.map((row) => (
                <div className="adm-reference-source-row" key={row.targetKey}>
                  <div>
                    <strong>{row.num}. {row.title}</strong>
                    <span>{formatReferences(row.referenceCount)} from {formatSources(row.sourceChapterCount)}</span>
                  </div>
                  <p>{row.sources.map((source) => `${source.num}. ${source.title}${source.count > 1 ? ` x${source.count}` : ''}`).join(' | ')}</p>
                </div>
              ))}
            </div>
          </div>
          ) : (
            <div className="adm-reference-network-layout">
              <div className="adm-reference-network-wrap">
                <svg className="adm-reference-network" viewBox="0 0 980 560" role="img" aria-label="Chapter reference network">
                  <defs>
                    <marker id="reference-arrow" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto" markerUnits="strokeWidth">
                      <path d="M 0 0 L 9 4.5 L 0 9 z" fill="rgba(74,107,90,.42)" />
                    </marker>
                  </defs>
                  {network.links.map((link) => {
                    const source = network.nodes.find((node) => node.id === link.sourceId)
                    const target = network.nodes.find((node) => node.id === link.targetId)
                    if (!source || !target) return null
                    const isActive = !selectedNode || selectedNode.id === source.id || selectedNode.id === target.id

                    return (
                      <path
                        key={`${link.sourceId}-${link.targetId}`}
                        className={`adm-reference-network-link${isActive ? ' active' : ''}`}
                        d={edgePath(source, target)}
                        strokeWidth={Math.min(5, 1 + link.count)}
                        markerEnd="url(#reference-arrow)"
                      >
                        <title>{nodeTitle(source)} references {nodeTitle(target)} {formatReferences(link.count)}</title>
                      </path>
                    )
                  })}
                  {network.nodes.map((node, index) => {
                    const isSelected = selectedNode?.id === node.id
                    const isConnected = !selectedNode
                      || isSelected
                      || network.links.some((link) => (
                        (link.sourceId === selectedNode.id && link.targetId === node.id)
                        || (link.targetId === selectedNode.id && link.sourceId === node.id)
                      ))

                    return (
                      <g
                        key={node.id}
                        className={`adm-reference-network-node${isSelected ? ' selected' : ''}${isConnected ? ' connected' : ''}`}
                        transform={`translate(${node.x} ${node.y})`}
                        onMouseEnter={() => setSelectedNodeId(node.id)}
                        onFocus={() => setSelectedNodeId(node.id)}
                        onClick={() => setSelectedNodeId(node.id)}
                        tabIndex={0}
                        role="button"
                        aria-label={`${nodeTitle(node)}, ${formatReferences(node.incoming)} received`}
                      >
                        <circle r={node.radius} className={index === 0 ? 'center' : ''} />
                        <text y="4" textAnchor="middle">{node.num}</text>
                        <title>{nodeTitle(node)}: {formatReferences(node.incoming)} received, {formatReferences(node.outgoing)} sent</title>
                      </g>
                    )
                  })}
                </svg>
              </div>

              <aside className="adm-reference-network-panel" aria-label="Selected chapter reference details">
                <span>Selected chapter</span>
                <strong>{selectedNode ? nodeTitle(selectedNode) : 'No chapter selected'}</strong>
                <div className="adm-reference-network-stats">
                  <div>
                    <b>{selectedNode?.incoming ?? 0}</b>
                    <small>received</small>
                  </div>
                  <div>
                    <b>{selectedNode?.incomingSources ?? 0}</b>
                    <small>source chapters</small>
                  </div>
                  <div>
                    <b>{selectedNode?.outgoing ?? 0}</b>
                    <small>sent</small>
                  </div>
                </div>
                <p>
                  Bigger circles receive more references. Lines point from the chapter making the reference to the chapter being quoted.
                </p>
                <div className="adm-reference-network-list">
                  <em>Quoted by</em>
                  {selectedIncomingRows.length > 0
                    ? selectedIncomingRows.map((source) => (
                      <span key={source.num}>{source.num}. {source.title}{source.count > 1 ? ` x${source.count}` : ''}</span>
                    ))
                    : <span>No incoming references</span>}
                </div>
                <div className="adm-reference-network-list">
                  <em>Quotes</em>
                  {selectedOutgoingRows.length > 0
                    ? selectedOutgoingRows.map((target) => (
                      <span key={target.num}>{target.num}. {target.title}{target.count > 1 ? ` x${target.count}` : ''}</span>
                    ))
                    : <span>No outgoing references</span>}
                </div>
              </aside>
            </div>
          )
        ) : (
          <div className="adm-reference-empty">
            Add structured chapter links in the content to populate this map.
          </div>
        )}
      </div>
    </section>
  )
}
