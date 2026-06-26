'use client'

import Link from 'next/link'
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

// Simple, presentation-style sales forecast — the "story" version of our first
// six months (Jul–Dec 2026). No controls: a fixed picture meant to be read.
// The matching interactive model lives at /admin/sales-simulation.

const AMBER = '#E08A1E'
const BLUE = '#2f7fcf'
const GREEN = '#1F7A5A'
// The original design is a serif, editorial "story" page — matching its
// typography is what makes the chart read as polished.
const SERIF = 'Georgia, "Times New Roman", serif'
const INK = '#54524c'

const labels = ['July', 'August', 'September', 'October', 'November', 'December']
const cumulative = [40, 100, 194, 322, 484, 680]
// First two months are the hand-seeding "getting started" phase (amber), the
// rest is the "picking up speed" phase (blue).
const chartData = labels.map((name, i) => ({
  name,
  value: cumulative[i],
  fill: i < 2 ? AMBER : BLUE,
}))

function Step({
  n,
  color,
  title,
  children,
}: {
  n: number
  color: string
  title: string
  children: React.ReactNode
}) {
  return (
    <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start', marginBottom: 22 }}>
      <div
        style={{
          flex: 'none',
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: color,
          color: '#fff',
          fontSize: 22,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
        }}
      >
        {n}
      </div>
      <div>
        <h3 style={{ margin: '0 0 4px', fontSize: 20, fontWeight: 600 }}>{title}</h3>
        <p style={{ margin: 0, fontSize: 16, color: 'var(--adm-i50)', lineHeight: 1.6 }}>{children}</p>
      </div>
    </div>
  )
}

export default function SalesPlanPage() {
  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Sales forecast</p>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <h1 className="adm-page-title" style={{ margin: 0 }}>Sales plan — simple view</h1>
            <Link
              href="/admin/sales-simulation"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '.74rem',
                fontWeight: 600,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                color: 'var(--adm-gold)',
                border: '1px solid var(--adm-border)',
                background: 'rgba(160,124,58,.1)',
                borderRadius: 999,
                padding: '5px 14px',
                whiteSpace: 'nowrap',
              }}
            >
              Open interactive simulation →
            </Link>
          </div>
          <p className="adm-page-sub">
            A simple picture of our first six months — from July to December 2026 — and where it could
            lead.
          </p>
        </div>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24, fontFamily: SERIF, color: INK }}>
        <p style={{ fontSize: 18, lineHeight: 1.7, margin: '0 0 14px' }}>
          We are selling Guy&apos;s method as an <strong>online book</strong>: practitioners pay once and
          can read it, follow the recommendations, and use the maps on any computer or phone.
        </p>
        <p style={{ fontSize: 18, lineHeight: 1.7, margin: 0 }}>
          Because the method is built on real knowledge of anatomy, the first people we sell to are{' '}
          <strong>fellow professionals</strong> — osteopaths, physiotherapists, chiropractors, nurses
          and reflexologists. They are the ones equipped to understand and apply it.
        </p>
      </div>

      <div className="adm-scorecards">
        <div className="adm-scorecard">
          <p className="adm-scorecard-value" style={{ color: GREEN }}>100</p>
          <p className="adm-scorecard-label">our target for the end of August</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-value" style={{ color: GREEN }}>~680</p>
          <p className="adm-scorecard-label">copies by the end of December</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-value" style={{ color: GREEN }}>~€54,000</p>
          <p className="adm-scorecard-label">total received by December</p>
        </div>
      </div>

      <p className="adm-section-title">The first six months, month by month</p>
      <div className="adm-chart-card compact-plot" style={{ marginBottom: 24, fontFamily: SERIF }}>
        <div
          style={{
            display: 'flex',
            gap: 28,
            justifyContent: 'center',
            fontSize: 17,
            color: INK,
            marginBottom: 10,
            flexWrap: 'wrap',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 16, height: 16, borderRadius: 4, background: AMBER }} />
            Getting started (Jul–Aug)
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <span style={{ width: 16, height: 16, borderRadius: 4, background: BLUE }} />
            Picking up speed (Sep–Dec)
          </span>
        </div>
        <div className="adm-chart-plot-wrap">
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} margin={{ top: 16, right: 12, left: 8, bottom: 8 }} barCategoryGap="22%">
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(26,26,24,.10)" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: INK, fontSize: 16, fontFamily: SERIF }}
                axisLine={false}
                tickLine={false}
                tickMargin={10}
              />
              <YAxis
                tick={{ fill: INK, fontSize: 15, fontFamily: SERIF }}
                axisLine={false}
                tickLine={false}
                allowDecimals={false}
                width={68}
                label={{
                  value: 'Total copies sold',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: INK, fontSize: 15, fontFamily: SERIF, textAnchor: 'middle' },
                }}
              />
              <Tooltip
                contentStyle={{
                  background: '#22211e',
                  border: 'none',
                  borderRadius: 8,
                  color: '#faf9f5',
                  fontSize: 15,
                  fontFamily: SERIF,
                }}
                cursor={{ fill: 'rgba(26,26,24,.04)' }}
                formatter={(v: number) => [`${v.toLocaleString()} copies in total`, 'Total']}
              />
              <Bar dataKey="value" radius={[6, 6, 0, 0]} maxBarSize={88}>
                {chartData.map((d, i) => (
                  <Cell key={i} fill={d.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <p style={{ fontSize: 17, color: INK, textAlign: 'center', marginTop: 10, lineHeight: 1.6 }}>
          Each bar shows the <strong>total</strong> number of copies sold so far. The climb gets steeper as
          more colleagues hear about it.
        </p>
      </div>

      <p className="adm-section-title">How it works, in three simple steps</p>
      <div className="adm-chart-card" style={{ marginBottom: 24, fontFamily: SERIF }}>
        <Step n={1} color={AMBER} title="Get started — sales begin in mid-July">
          We introduce the method by hand, one professional at a time. Reaching 100 buyers by the end of
          August is the goal we set ourselves to focus our efforts — a target to aim for, not a prediction.
        </Step>
        <Step n={2} color={BLUE} title="Pick up speed — from September onwards">
          Once colleagues start recommending it to one another, and we put more effort into reaching them,
          sales grow faster each month rather than staying flat.
        </Step>
        <Step n={3} color={GREEN} title="Open the bigger door — later, with a phone app">
          A dedicated app (a smart assistant for the treatment) will one day make the method usable by the
          much larger wellness world — yoga studios, massage salons and wellbeing centres. That is the big
          opportunity, but it comes after this first stage.
        </Step>
      </div>

      <p className="adm-section-title">Why we are doing this exercise</p>
      <div className="adm-chart-card" style={{ marginBottom: 24, fontFamily: SERIF, color: INK }}>
        <p style={{ fontSize: 17, lineHeight: 1.7, margin: 0 }}>
          These first six months are a test. If we can reliably sell to professionals and watch sales speed
          up, it tells us whether the ROP Institute should become a proper business rather than remain a
          non-profit association. The number that matters is not just how much we earn, but whether the
          growth keeps climbing.
        </p>
        <p style={{ fontSize: 14, color: 'var(--adm-i50)', lineHeight: 1.7, marginTop: 16, borderTop: '1px solid var(--adm-i08)', paddingTop: 16 }}>
          For scale: there are well over 700,000 manual-therapy professionals across Europe. Even our
          December figure is a tiny fraction of that — so there is enormous room to grow. These figures are
          an estimate to guide the discussion, not a promise.
        </p>
      </div>
    </main>
  )
}
