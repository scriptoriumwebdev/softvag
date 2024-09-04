import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Links } from "./components/links";
import { Footer } from "./components/footer";
import { Providers } from "./providers";
// import CookieBanner from "./components/cookiebanner";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./components/loading";
import { GoogleTagManager } from "@next/third-parties/google";
import CookieBanner from "./components/cookieBanner";

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
      <body className={inter.className}>
        <GoogleTagManager gtmId="GTM-PV2GFGSJ" />
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
