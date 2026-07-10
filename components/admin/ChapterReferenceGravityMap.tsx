'use client'

import { useMemo } from 'react'
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

function truncate(value: string, max: number): string {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value
}

function formatReferences(value: number): string {
  return `${value} reference${value === 1 ? '' : 's'}`
}

function formatSources(value: number): string {
  return `${value} source chapter${value === 1 ? '' : 's'}`
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
          <div className="adm-reference-empty">
            Add structured chapter links in the content to populate this map.
          </div>
        )}
      </div>
    </section>
  )
}
