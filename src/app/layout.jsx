import './globals.css';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://9a3b2e7d95b0.ngrok-free.app" || 'http://localhost:3000';

export const metadata = {
  title: 'Thiệp cưới - Văn Chung & Hồng Nhung',
  description:
    'Thiệp cưới online của Văn Chung & Hồng Nhung. Kính mời bạn đến dự buổi lễ trọng đại của chúng tôi!',
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: 'Thiệp cưới - Văn Chung & Hồng Nhung',
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
  twitter: {
    card: 'summary_large_image',
    title: 'Thiệp cưới - Văn Chung & Hồng Nhung',
    description: 'Cùng chung vui trong ngày hạnh phúc của Văn Chung & Hồng Nhung 💖',
    images: [`${BASE_URL}/images/album/compressed/DSC_2072.webp`],
  },
  icons: {
    icon: '/assets/heart.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        {/* Favicon + preload font */}
        <link
          rel="preload"
          href="/fonts/SVN-Helga.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/assets/heart.png" type="image/png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
