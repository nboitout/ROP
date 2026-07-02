import { ImageResponse } from 'next/og'
import { SITE_DESCRIPTION, SITE_NAME } from '@/lib/site'

export const runtime = 'edge'
export const alt = 'R.O.P. - Guy Boitout'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#f5f0e8',
          color: '#1a1a18',
          fontFamily: 'Georgia, serif',
          padding: 64,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            border: '2px solid #a07c3a',
            padding: 56,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: 30, letterSpacing: 4, color: '#4a6b5a' }}>{SITE_NAME}</div>
            <div style={{ fontSize: 24, color: '#a07c3a' }}>3e ouvrage</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ fontSize: 78, lineHeight: 1.02, maxWidth: 920 }}>
              Reflexotherapie occipito-podale
            </div>
            <div style={{ fontSize: 48, lineHeight: 1.12, color: '#4a6b5a', maxWidth: 880 }}>
              Visceres des cavites abdominale et pelvienne
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40, alignItems: 'flex-end' }}>
            <div style={{ fontSize: 27, lineHeight: 1.35, maxWidth: 760, color: '#54524c' }}>
              {SITE_DESCRIPTION}
            </div>
            <div style={{ fontSize: 36, color: '#1a1a18', whiteSpace: 'nowrap' }}>Guy Boitout</div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
