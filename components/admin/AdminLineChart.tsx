'use client'

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

export interface LineDataPoint {
  date: string
  leads: number
  visits: number
}

interface Props {
  data: LineDataPoint[]
}

export default function AdminLineChart({ data }: Props) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data} margin={{ top: 4, right: 8, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.12)" />
        <XAxis
          dataKey="date"
          tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: string) => v.slice(5)}
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
          labelStyle={{ color: 'rgba(245,240,232,.55)', marginBottom: 4, fontSize: 11 }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: 'rgba(26,26,24,.62)', fontFamily: 'DM Sans, sans-serif' }}
        />
        <Line
          type="monotone"
          dataKey="visits"
          name="Visits"
          stroke="#4a6b5a"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Line
          type="monotone"
          dataKey="leads"
          name="Readers"
          stroke="#c9a35e"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
