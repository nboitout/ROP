'use client'

import { ResponsiveContainer, Sankey, Tooltip } from 'recharts'
import type { NavigationFlowData, NavigationFlowNode } from '@/lib/navigationFlow'

interface NodeShapeProps {
  x: number
  y: number
  width: number
  height: number
  payload: NavigationFlowNode
}

function shortPage(page: string): string {
  if (page === '/') return 'Homepage'
  if (page === '/?gate=free') return 'Free-chapter signup'
  if (page === 'Other pages' || page === 'Dropped off') return page
  return page.length > 28 ? `${page.slice(0, 26)}…` : page
}

function FlowNode({ x, y, width, height, payload }: NodeShapeProps) {
  const rightSide = payload.step >= 3
  const labelX = rightSide ? x - 8 : x + width + 8
  const anchor = rightSide ? 'end' : 'start'
  const color = payload.isDropoff ? '#c8c7c1' : '#4a6b5a'
  return (
    <g>
      <rect x={x} y={y} width={width} height={Math.max(2, height)} rx={2} fill={color} />
      {height >= 12 && (
        <>
          <text x={labelX} y={y + Math.min(16, height / 2)} textAnchor={anchor} className="adm-flow-node-name">
            {shortPage(payload.name)}
          </text>
          <text x={labelX} y={y + Math.min(31, height / 2 + 15)} textAnchor={anchor} className="adm-flow-node-value">
            {payload.count.toLocaleString()} · {Math.round(payload.percentage)}%
          </text>
        </>
      )}
    </g>
  )
}

export default function NavigationFlowChart({ data }: { data: NavigationFlowData }) {
  if (data.totalVisits === 0 || data.links.length === 0) {
    return <div className="adm-empty">No qualified multi-step navigation data yet.</div>
  }

  return (
    <div className="adm-flow-scroll">
      <div className="adm-flow-canvas">
        <div className="adm-flow-steps" aria-hidden="true">
          {Array.from({ length: data.steps }, (_, index) => <span key={index}>{index + 1}{index === 0 ? 'st' : index === 1 ? 'nd' : index === 2 ? 'rd' : 'th'} page</span>)}
        </div>
        <ResponsiveContainer width="100%" height={560}>
          <Sankey
            data={data}
            dataKey="value"
            nameKey="name"
            nodeWidth={12}
            nodePadding={24}
            linkCurvature={0.52}
            iterations={48}
            margin={{ top: 18, right: 150, bottom: 10, left: 18 }}
            node={<FlowNode x={0} y={0} width={0} height={0} payload={data.nodes[0]} />}
            link={{ stroke: 'none', fill: 'rgba(73,98,123,.24)' }}
          >
            <Tooltip
              formatter={(value: number, name: string) => [`${Number(value).toLocaleString()} visits`, name]}
              contentStyle={{ background: '#1a1a18', border: 0, borderRadius: 3, color: '#f5f0e8', fontSize: 12 }}
            />
          </Sankey>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
