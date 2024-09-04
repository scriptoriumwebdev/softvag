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
        <Script id="google-analytics" strategy="afterInteractive">
          {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5VJFVJN');
                `}
        </Script>
      </head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5VJFVJN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
