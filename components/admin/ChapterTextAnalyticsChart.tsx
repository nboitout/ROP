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

export type ChapterTextAnalyticsRow = {
  num: string
  title: string
  wordCount: number
  readingMinutes: number
  photosInText: number
  contentSlideCount: number
  cartographyCount: number
}

type MetricKey = 'readingMinutes' | 'wordCount' | 'photosInText' | 'contentSlideCount' | 'cartographyCount'

type MetricConfig = {
  key: MetricKey
  label: string
  shortLabel: string
  valueName: string
  emptyValue: string
  format: (value: number) => string
}

const METRICS: MetricConfig[] = [
  {
    key: 'readingMinutes',
    label: 'Read load',
    shortLabel: 'Minutes',
    valueName: 'Minutes to read',
    emptyValue: '0 min',
    format: (value) => `${Math.round(value)} min`,
  },
  {
    key: 'wordCount',
    label: 'Number of words',
    shortLabel: 'Words',
    valueName: 'Words',
    emptyValue: '0 words',
    format: (value) => `${Math.round(value).toLocaleString('en-US')} words`,
  },
  {
    key: 'photosInText',
    label: 'Photos of Foot Massage',
    shortLabel: 'Foot massage photos',
    valueName: 'Photos of Foot Massage',
    emptyValue: '0 photos',
    format: (value) => `${Math.round(value)} photo${Math.round(value) === 1 ? '' : 's'}`,
  },
  {
    key: 'contentSlideCount',
    label: 'Anatomy and Physio Slides',
    shortLabel: 'Excludes cartographies',
    valueName: 'Anatomy and Physio Slides',
    emptyValue: '0 slides',
    format: (value) => `${Math.round(value)} slide${Math.round(value) === 1 ? '' : 's'}`,
  },
  {
    key: 'cartographyCount',
    label: 'Cartographies',
    shortLabel: 'Reflex-zone slides',
    valueName: 'Cartographies',
    emptyValue: '0 slides',
    format: (value) => `${Math.round(value)} slide${Math.round(value) === 1 ? '' : 's'}`,
  },
]

function truncate(value: string, max: number): string {
  return value.length > max ? `${value.slice(0, max - 1)}...` : value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ValueLabel({ x, y, width, height, value, formatter }: any) {
  const label = typeof formatter === 'function' ? formatter(Number(value)) : String(value)

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
      {label}
    </text>
  )
}

export default function ChapterTextAnalyticsChart({ rows }: { rows: ChapterTextAnalyticsRow[] }) {
  const [metricKey, setMetricKey] = useState<MetricKey>('readingMinutes')
  const metric = METRICS.find((item) => item.key === metricKey) ?? METRICS[0]

  const chartRows = useMemo(() => {
    return [...rows]
      .map((row) => ({
        ...row,
        name: `${row.num}. ${row.title}`,
        value: row[metric.key],
      }))
      .sort((a, b) => b.value - a.value || Number(a.num) - Number(b.num))
  }, [metric.key, rows])

  const highest = chartRows[0]
  const lowest = chartRows[chartRows.length - 1]
  const average = chartRows.length
    ? chartRows.reduce((sum, row) => sum + row.value, 0) / chartRows.length
    : 0

  const labelFormatter = (value: number) => metric.format(value)
  const yAxisWidth = 220
  const height = Math.max(440, chartRows.length * 34 + 72)

  return (
    <section className="adm-text-analytics-section" aria-labelledby="text-analytics-heading">
      <div className="adm-chart-card full adm-text-analytics-card">
        <div className="adm-text-analytics-head">
          <div>
            <p className="adm-chart-title" id="text-analytics-heading">Chapter reading and media comparison</p>
            <p className="adm-page-sub adm-text-analytics-sub">
              One measure at a time, with chapters sorted from highest to lowest so differences are visible at a glance.
            </p>
          </div>
          <div className="adm-text-analytics-count">{chartRows.length} analyzed chapters</div>
        </div>

        <div className="adm-metric-tabs" role="tablist" aria-label="Chapter analytics metric">
          {METRICS.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`adm-metric-tab${item.key === metric.key ? ' active' : ''}`}
              onClick={() => setMetricKey(item.key)}
              aria-pressed={item.key === metric.key}
            >
              <span>{item.label}</span>
              <small>{item.shortLabel}</small>
            </button>
          ))}
        </div>

        <div className="adm-text-analytics-summary">
          <div>
            <span>Highest</span>
            <strong>{highest ? highest.name : '-'}</strong>
            <em>{highest ? metric.format(highest.value) : metric.emptyValue}</em>
          </div>
          <div>
            <span>Average</span>
            <strong>All analyzed chapters</strong>
            <em>{metric.format(average)}</em>
          </div>
          <div>
            <span>Lowest</span>
            <strong>{lowest ? lowest.name : '-'}</strong>
            <em>{lowest ? metric.format(lowest.value) : metric.emptyValue}</em>
          </div>
        </div>

        <div className="adm-text-analytics-chart" style={{ height }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartRows}
              layout="vertical"
              margin={{ top: 4, right: 86, left: 0, bottom: 8 }}
              barCategoryGap="22%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.12)" horizontal={false} />
              <XAxis
                type="number"
                tick={{ fill: 'rgba(26,26,24,.58)', fontSize: 11, fontFamily: 'DM Sans, sans-serif' }}
                tickFormatter={(value) => metric.format(Number(value)).replace(/ words| photos| photo| slides| slide| min/g, '')}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
              />
              <YAxis
                type="category"
                dataKey="name"
                width={yAxisWidth}
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
                formatter={(value) => [metric.format(Number(value)), metric.valueName]}
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
              <Bar dataKey="value" name={metric.valueName} radius={[0, 3, 3, 0]}>
                <LabelList
                  dataKey="value"
                  content={(props) => <ValueLabel {...props} formatter={labelFormatter} />}
                />
                {chartRows.map((row, index) => (
                  <Cell
                    key={row.num}
                    fill={index === 0 ? '#a07c3a' : index % 2 === 0 ? '#4a6b5a' : '#6d7f72'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
