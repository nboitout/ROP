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
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(245,240,232,.08)" />
        <XAxis
          dataKey="date"
          tick={{ fill: 'rgba(245,240,232,.45)', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: string) => v.slice(5)}
        />
        <YAxis
          tick={{ fill: 'rgba(245,240,232,.45)', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
          allowDecimals={false}
        />
        <Tooltip
          contentStyle={{
            background: '#242420',
            border: '1px solid rgba(201,163,94,.25)',
            borderRadius: 4,
            color: '#f5f0e8',
            fontSize: 12,
          }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: 'rgba(245,240,232,.6)' }}
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
          name="Leads"
          stroke="#c9a35e"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
