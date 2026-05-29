'use client'

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from 'recharts'

export interface BarDataPoint {
  name: string
  value: number
}

interface Props {
  data: BarDataPoint[]
  color?: string
  layout?: 'vertical' | 'horizontal'
}

export default function AdminBarChart({
  data,
  color = '#4a6b5a',
  layout = 'horizontal',
}: Props) {
  if (layout === 'vertical') {
    return (
      <ResponsiveContainer width="100%" height={Math.max(200, data.length * 36 + 40)}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 0, right: 16, left: 8, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(245,240,232,.08)" horizontal={false} />
          <XAxis
            type="number"
            tick={{ fill: 'rgba(245,240,232,.45)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
            allowDecimals={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            width={130}
            tick={{ fill: 'rgba(245,240,232,.7)', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: '#242420',
              border: '1px solid rgba(201,163,94,.25)',
              borderRadius: 4,
              color: '#f5f0e8',
              fontSize: 12,
            }}
            cursor={{ fill: 'rgba(245,240,232,.04)' }}
          />
          <Bar dataKey="value" name="Count" radius={[0, 3, 3, 0]}>
            {data.map((_, i) => (
              <Cell
                key={i}
                fill={i % 2 === 0 ? color : '#c9a35e'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: -10, bottom: 4 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(245,240,232,.08)" />
        <XAxis
          dataKey="name"
          tick={{ fill: 'rgba(245,240,232,.45)', fontSize: 11 }}
          axisLine={false}
          tickLine={false}
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
          cursor={{ fill: 'rgba(245,240,232,.04)' }}
        />
        <Bar dataKey="value" name="Count" radius={[3, 3, 0, 0]}>
          {data.map((_, i) => (
            <Cell
              key={i}
              fill={i % 2 === 0 ? color : '#c9a35e'}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
