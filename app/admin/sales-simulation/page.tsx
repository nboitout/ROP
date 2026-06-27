'use client'

import { useState, useMemo } from 'react'
import {
  ResponsiveContainer,
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from 'recharts'

// Elaborate, interactive sales forecast — the tunable model behind the simple
// /admin/sales-plan story. Three sliders drive a two-phase model:
//   Phase 1 (Jun–Aug): hand-seed the professional niche to a target, split
//                       20% / 35% / 45% across the three months.
//   Phase 2 (Sep–Dec): quadratic traction — each month adds a linearly growing
//                       number of new sales (Aug run-rate + k × acceleration).

const AMBER = '#EF9F27'
const BLUE = '#378ADD'
const TEAL = '#0F6E56'
const POOL = 765000
// Matches the recommended "Livre en ligne" price on the public website.
const DEFAULT_PRICE = 70
const PRICE_MIN = 50
const PRICE_MAX = 100
const DEFAULT_PHASE_1_TARGET = 100
const DEFAULT_PHASE_2_ACCEL = 40

const labels = ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function eur(n: number) {
  return '€' + Math.round(n).toLocaleString()
}

function eurK(n: number) {
  return '€' + Math.round(n / 1000).toLocaleString() + 'k'
}

function model(T1: number, g: number, price: number) {
  const p1 = [0.2, 0.35, 0.45].map((x) => x * T1)
  const r = p1[2]
  const p2 = [1, 2, 3, 4].map((k) => r + k * g)
  const monthly = [...p1, ...p2]
  let cum = 0
  const cumA: number[] = []
  const cumRev: number[] = []
  monthly.forEach((s) => {
    cum += s
    cumA.push(cum)
    cumRev.push(cum * price)
  })
  return { monthly, cumA, cumRev }
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: {
  label: string
  min: number
  max: number
  step: number
  value: number
  display: string
  onChange: (v: number) => void
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 11 }}>
      <label style={{ fontSize: 14, color: 'var(--adm-i50)', minWidth: 220 }}>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        style={{ flex: 1, accentColor: BLUE }}
      />
      <span style={{ fontSize: 14, fontWeight: 600, minWidth: 54, textAlign: 'right' }}>{display}</span>
    </div>
  )
}

export default function SalesSimulationPage() {
  const [price, setPrice] = useState(DEFAULT_PRICE)
  const [t1, setT1] = useState(DEFAULT_PHASE_1_TARGET)
  const [accel, setAccel] = useState(DEFAULT_PHASE_2_ACCEL)

  const m = useMemo(() => model(t1, accel, price), [t1, accel, price])

  const chartData = labels.map((name, i) => ({
    name,
    monthly: Math.round(m.monthly[i]),
    revenue: Math.round(m.cumRev[i]),
    fill: i < 3 ? AMBER : BLUE,
  }))

  const aug = Math.round(m.cumA[2]).toLocaleString()
  const dec = Math.round(m.cumA[6]).toLocaleString()
  const rev = eur(m.cumRev[6])
  const pool = ((m.cumA[6] / POOL) * 100).toFixed(2) + '%'
  const currentOutcome = `${dec} copies · ${rev}`

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Sales forecast</p>
          <h1 className="adm-page-title">Sales simulation — elaborate view</h1>
          <p className="adm-page-sub">
            One-time sale to manual-therapy professionals · Phase 1 seeds {t1} copies by end Aug 2026 ·
            Phase 2 quadratic traction to Dec 2026
          </p>
        </div>
      </div>

      <div className="adm-scorecards">
        <Scorecard label="By Aug 31 (target)" value={aug} />
        <Scorecard label="By Dec 31 (copies)" value={dec} />
        <Scorecard label="Revenue by Dec 31" value={rev} />
        <Scorecard label="Share of pro pool" value={pool} />
      </div>

      <div className="adm-chart-card compact-plot" style={{ marginBottom: 24 }}>
        <Slider
          label="Price per copy"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={1}
          value={price}
          display={'€' + price}
          onChange={setPrice}
        />
        <Slider
          label="Phase-1 target (by Aug 31)"
          min={50}
          max={200}
          step={5}
          value={t1}
          display={String(t1)}
          onChange={setT1}
        />
        <Slider
          label="Phase-2 acceleration (+sales/mo)"
          min={0}
          max={90}
          step={5}
          value={accel}
          display={String(accel)}
          onChange={setAccel}
        />

        <div
          style={{
            display: 'flex',
            gap: 18,
            flexWrap: 'wrap',
            fontSize: 12,
            color: 'var(--adm-i50)',
            margin: '16px 0 8px',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: AMBER }} />
            Phase 1 · seeding (Jun–Aug)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 12, height: 12, borderRadius: 2, background: BLUE }} />
            Phase 2 · quadratic traction (Sep–Dec)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <span style={{ width: 14, height: 3, background: TEAL }} />
            Cumulative revenue
          </span>
        </div>

        <div className="adm-chart-plot-wrap">
          <ResponsiveContainer width="100%" height={330}>
            <ComposedChart data={chartData} margin={{ top: 12, right: 12, left: 8, bottom: 8 }} barCategoryGap="26%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.10)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: 'rgba(26,26,24,.62)', fontSize: 13, fontFamily: 'DM Sans, sans-serif' }}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                yAxisId="left"
                tick={{ fill: 'rgba(26,26,24,.62)', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
                width={64}
                label={{ value: 'New copies / mo', angle: -90, position: 'insideLeft', style: { fill: 'rgba(26,26,24,.5)', fontSize: 12, textAnchor: 'middle' } }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                tick={{ fill: 'rgba(26,26,24,.62)', fontSize: 12, fontFamily: 'DM Sans, sans-serif' }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
                width={64}
                tickFormatter={(v) => eurK(Number(v))}
                label={{ value: 'Revenue', angle: 90, position: 'insideRight', style: { fill: 'rgba(26,26,24,.5)', fontSize: 12, textAnchor: 'middle' } }}
              />
              <Tooltip
                contentStyle={{
                  background: '#1a1a18',
                  border: 'none',
                  borderRadius: 8,
                  color: '#f5f0e8',
                  fontSize: 13,
                  fontFamily: 'DM Sans, sans-serif',
                }}
                cursor={{ fill: 'rgba(26,26,24,.04)' }}
                formatter={(v: number, name: string) => [
                  name === 'Cumulative revenue' ? eur(v) : `${Math.round(v).toLocaleString()} copies`,
                  name,
                ]}
              />
              <Legend wrapperStyle={{ fontSize: 12, color: 'rgba(26,26,24,.62)', fontFamily: 'DM Sans, sans-serif', paddingTop: 8 }} />
              <Bar yAxisId="left" dataKey="monthly" name="New copies" radius={[4, 4, 0, 0]} maxBarSize={64}>
                {chartData.map((d, i) => (
                  <Cell key={i} fill={d.fill} />
                ))}
              </Bar>
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="revenue"
                name="Cumulative revenue"
                stroke={TEAL}
                strokeWidth={2}
                dot={{ r: 3, fill: TEAL }}
                activeDot={{ r: 5 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <p style={{ fontSize: 12, color: 'var(--adm-i30)', marginTop: 14 }}>
          Pro pool ≈ 765k manual-therapy practitioners in Europe. Wellness/yoga mass market excluded —
          unlocks later with the dedicated AI-assistant app.
        </p>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Model logic</p>
        <p style={{ fontSize: 14, color: 'var(--adm-i50)', lineHeight: 1.7, margin: '0 0 14px' }}>
          Phase 1 (Jun–Aug) is hand-seeding the professional niche to a target of {t1} copies, distributed
          20% / 35% / 45% across the three months. Phase 2 (Sep–Dec) applies a calibrated quadratic
          acceleration: each month adds a linearly growing number of new sales (Aug run-rate + k ×
          acceleration), so cumulative copies trace a parabola — the &quot;traction&quot; shape.
        </p>
        <table className="adm-table">
          <tbody>
            <tr>
              <td>Phase-1 target</td>
              <td className="muted">{t1} copies by Aug 31, 2026</td>
            </tr>
            <tr>
              <td>Price</td>
              <td className="muted">
                €{price} (range €{PRICE_MIN}–{PRICE_MAX})
              </td>
            </tr>
            <tr>
              <td>Phase-2 acceleration</td>
              <td className="muted">+{accel} new sales / month</td>
            </tr>
            <tr>
              <td>Current Dec 31 outcome</td>
              <td className="muted">{currentOutcome}</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: 12, color: 'var(--adm-i30)', lineHeight: 1.7, marginTop: 14 }}>
          TAM context: ~79k osteopaths and ~626k physiotherapists in Europe, plus chiropractors and
          reflexologists. Even the Dec figure is &lt;0.1% of this pool — near-term growth is
          execution-limited, not market-limited.
        </p>
      </div>
    </main>
  )
}

function Scorecard({ label, value }: { label: string; value: string }) {
  return (
    <div className="adm-scorecard">
      <p className="adm-scorecard-label">{label}</p>
      <p className="adm-scorecard-value">{value}</p>
    </div>
  )
}
