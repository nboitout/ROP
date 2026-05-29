'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

export interface ClusteredDataPoint {
  country: string
  visits: number
  readers: number
}

interface Props {
  data: ClusteredDataPoint[]
}

function truncate(s: string, max = 12) {
  return s.length > max ? s.slice(0, max - 1) + '…' : s
}

export default function AdminClusteredBarChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={Math.max(260, data.length * 28 + 60)}>
      <BarChart
        data={data}
        margin={{ top: 4, right: 16, left: -10, bottom: 24 }}
        barCategoryGap="28%"
        barGap={3}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.12)" vertical={false} />
        <XAxis
          dataKey="country"
          tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: string) => truncate(v)}
          interval={0}
          angle={-30}
          textAnchor="end"
          height={48}
        />
        <YAxis
          tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            background: '#1a1a18',
            border: '1px solid rgba(160,124,58,.3)',
            borderRadius: 3,
            color: '#f5f0e8',
            fontSize: 12,
            fontFamily: 'DM Sans, sans-serif',
          }}
          labelStyle={{ color: 'rgba(245,240,232,.65)', marginBottom: 6, fontSize: 11, letterSpacing: '.06em', textTransform: 'uppercase' }}
          cursor={{ fill: 'rgba(26,26,24,.03)' }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: 'rgba(26,26,24,.62)', fontFamily: 'DM Sans, sans-serif', paddingTop: 8 }}
        />
        <Bar dataKey="visits" name="Visits" fill="#4a6b5a" radius={[3, 3, 0, 0]} />
        <Bar dataKey="readers" name="Readers" fill="#c9a35e" radius={[3, 3, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
