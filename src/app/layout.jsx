import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://vanchung-hongnhung-wedding.vercel.app';

export const metadata = {
  title: 'Văn Chung ❤️ Hồng Nhung – Thiệp Cưới',
  description: 'Thiệp cưới online của Văn Chung & Hồng Nhung. Kính mời bạn đến dự buổi lễ trọng đại của chúng tôi!',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Văn Chung ❤️ Hồng Nhung – Thiệp Cưới',
    description: 'Cùng chung vui trong ngày hạnh phúc của Văn Chung & Hồng Nhung 💖',
    url: BASE_URL,
    siteName: 'Thiệp cưới Văn Chung & Hồng Nhung',
    images: [
      {
        url: `${BASE_URL}/images/album/compressed/DSC_2072.webp`,
        width: 1200,
        height: 630,
        alt: 'Thiệp cưới Văn Chung & Hồng Nhung',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  const ogImage = `${BASE_URL}/images/album/compressed/DSC_2072.webp`;

  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="vi" />
        <meta name="description" content="Thiệp cưới online của Văn Chung & Hồng Nhung. Kính mời bạn đến dự buổi lễ trọng đại của chúng tôi!" />
        <meta name="keywords" content="thiệp cưới, wedding, Văn Chung, Hồng Nhung, thiệp online" />
        <meta name="author" content="Văn Chung & Hồng Nhung" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={BASE_URL} />

        <meta property="og:title" content="Văn Chung ❤️ Hồng Nhung – Thiệp Cưới" />
        <meta property="og:description" content="Cùng chung vui trong ngày hạnh phúc của Văn Chung & Hồng Nhung 💖" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={BASE_URL} />
        <meta property="og:site_name" content="Thiệp cưới Văn Chung & Hồng Nhung" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Thiệp cưới Văn Chung & Hồng Nhung" />
        <meta property="og:image:type" content="image/webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Văn Chung ❤️ Hồng Nhung – Thiệp Cưới" />
        <meta name="twitter:description" content="Cùng chung vui trong ngày hạnh phúc của Văn Chung & Hồng Nhung 💖" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:creator" content="@vanchung_hongnhung" />

        <link rel="icon" href="/assets/heart.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/heart.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />

        <link rel="preload" href="/fonts/SVN-Helga.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/1.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'Lễ cưới Văn Chung & Hồng Nhung',
              description: 'Cùng chung vui trong ngày hạnh phúc của Văn Chung & Hồng Nhung 💖',
              startDate: '2025-11-08T18:00:00+07:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Hội trường tiệc cưới Văn Chung & Hồng Nhung',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Việt Nam',
                },
              },
              image: [ogImage],
              organizer: {
                '@type': 'Person',
                name: 'Văn Chung & Hồng Nhung',
              },
              url: BASE_URL,
            }),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
