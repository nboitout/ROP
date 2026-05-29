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

export interface StackedTimePoint {
  date: string
  [country: string]: number | string
}

interface Props {
  data: StackedTimePoint[]
  countries: string[]
}

const PALETTE = [
  '#4a6b5a', '#c9a35e', '#7a9b8a', '#a07c3a', '#5a8b6a',
  '#d4956a', '#3a5b4a', '#b08c4e', '#8aab9a', '#e0c080', '#aaaaaa',
]

export default function AdminStackedCountryChart({ data, countries }: Props) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 4, right: 8, left: -10, bottom: 0 }} barCategoryGap="18%">
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.12)" vertical={false} />
        <XAxis
          dataKey="date"
          tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v: string) => v.slice(5)}
          interval="preserveStartEnd"
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
          labelStyle={{ color: 'rgba(245,240,232,.55)', marginBottom: 6, fontSize: 11 }}
          cursor={{ fill: 'rgba(26,26,24,.04)' }}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: 'rgba(26,26,24,.62)', fontFamily: 'DM Sans, sans-serif', paddingTop: 12 }}
        />
        {countries.map((country, i) => (
          <Bar
            key={country}
            dataKey={country}
            stackId="a"
            fill={PALETTE[i % PALETTE.length]}
            isAnimationActive={false}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  )
}
