import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
}

export default async function handler(req) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get('title') || 'Davidson Fellipe'
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://fellipe.com').replace(/\/$/, '')

  const profileImageUrl = `${siteUrl}/images/profile.jpg`

  const fontSize = title.length > 50 ? 48 : title.length > 30 ? 56 : 64

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '1200px',
          height: '630px',
          backgroundColor: '#0f0f0f',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
            paddingRight: '60px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                fontSize: '18px',
                color: '#888888',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}
            >
              fellipe.com
            </div>
            <div
              style={{
                fontSize: `${fontSize}px`,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.15,
              }}
            >
              {title}
            </div>
          </div>
          <div style={{ fontSize: '22px', color: '#666666' }}>Davidson Fellipe</div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={profileImageUrl}
            alt=""
            width={220}
            height={220}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
