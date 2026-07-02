import type { Metadata } from 'next'
import { campaignLinks } from '@/lib/campaignLinks'

export const metadata: Metadata = { title: 'Campaigns - Admin R.O.P.' }

export default function CampaignsPage() {
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
