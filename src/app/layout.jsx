import './globals.css';

export const metadata = {
  title: 'Thiệp cưới - Văn Chung & Hồng Nhung',
  description: 'Thiệp cưới online',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preload" href="/fonts/SVN-Helga.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
