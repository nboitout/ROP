import type { Metadata } from 'next'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'
import { campaignLinks } from '@/lib/campaignLinks'
import { fetchAllSheets } from '@/lib/sheets'

export const metadata: Metadata = { title: 'Campaigns - Admin R.O.P.' }
export const dynamic = 'force-dynamic'

export default async function CampaignsPage() {
  const { visits } = await fetchAllSheets()

  const utmCount = new Map<string, number>()
  visits
    .filter((v) => v.utm_source && v.utm_source.trim() !== '')
    .forEach((v) => {
      const source = v.utm_source.trim()
      utmCount.set(source, (utmCount.get(source) ?? 0) + 1)
    })
  const utmData: BarDataPoint[] = [...utmCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Campaigns</p>
          <h1 className="adm-page-title">Tracked campaign links</h1>
          <p className="adm-page-sub">
            Use these URLs for shared posts, newsletters, partner links, and direct outreach so the UTM
            source charts stay clean.
          </p>
        </div>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">UTM Sources</p>
        <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, maxWidth: 720, lineHeight: 1.6 }}>
          This chart only counts visitors who arrive through a link <strong>tagged</strong>{' '}with UTM
          parameters (e.g. <code>?utm_source=facebook&amp;utm_medium=social</code>). An ordinary,
          untagged link - even an organic Facebook or Instagram post - will <strong>not</strong>{' '}appear
          here; it&apos;s recorded as direct/referral instead. To measure a channel, add UTM tags to the link
          you share there. The chart stays empty until tagged campaigns are used.
        </p>
        <AdminBarChart data={utmData} color="#4a6b5a" showValues />
      </div>

      <div className="adm-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Link</th>
              <th>Audience</th>
              <th>UTM tags</th>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>
            {campaignLinks.map((link) => (
              <tr key={link.id}>
                <td>
                  <strong>{link.label}</strong>
                </td>
                <td className="muted">{link.audience}</td>
                <td className="muted">
                  {link.source} / {link.medium} / {link.campaign}
                  {link.content ? ` / ${link.content}` : ''}
                </td>
                <td>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.url}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
