import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/links";
import { Footer } from "./components/footer";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./components/loading";
// import { GoogleAnalytics } from "@next/third-parties/google";
import CookieBanner from "./components/cookieBanner";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: {
    template: "%s - Kraków - SoftVAG",
    default: "Chiptuning DSG - Kraków - SoftVAG",
  },
  openGraph: {
    title: "%s - Kraków - SoftVAG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-Y58F5YNVX4`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'denied'
                });
                
                gtag('config', 'G-Y58F5YNVX4', {
                    page_path: window.location.pathname,
                });
                `}
        </Script>
      </head>
      <body className={inter.className}>
        <Providers>
          <Suspense fallback={<Loading />}>
            <Links />
            <div className="min-h-screen flex-grow mx-auto bg-gray-100 dark:bg-zinc-900">
              {children}
            </div>
            <Footer />
            <CookieBanner />
          </Suspense>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
