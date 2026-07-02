'use client'

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

export interface ReaderJourneyRadarPoint {
  metric: string
  selected: number
  average: number
}

interface Props {
  data: ReaderJourneyRadarPoint[]
  selectedName: string
}

export default function ReaderJourneyRadar({ data, selectedName }: Props) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="rgba(26,26,24,.14)" />
        <PolarAngleAxis
          dataKey="metric"
          tick={{ fill: 'rgba(26,26,24,.65)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={false}
          axisLine={false}
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
          formatter={(value: number) => `${Math.round(value)}%`}
        />
        <Legend
          wrapperStyle={{ fontSize: 11, color: 'rgba(26,26,24,.62)', fontFamily: 'DM Sans, sans-serif' }}
        />
        <Radar
          name={selectedName}
          dataKey="selected"
          stroke="#4a6b5a"
          fill="#4a6b5a"
          fillOpacity={0.24}
          strokeWidth={2}
        />
        <Radar
          name="Book average"
          dataKey="average"
          stroke="#9b5d45"
          fill="#9b5d45"
          fillOpacity={0.12}
          strokeWidth={2}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
