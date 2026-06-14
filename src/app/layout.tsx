import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav }            from "@/components/layout/Nav";
import { Footer }         from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ThemeProvider }  from "@/components/ThemeProvider";
import { WeatherLayer }   from "@/components/WeatherLayer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sentients.in"),
  title: { default: "Sentients | AI Systems, Product Strategy & Cognitive Engineering", template: "%s | Sentients" },
  description: "Building intelligent systems across AI automation, product leadership and cognitive computing. Systems studio by Shaashwath Vijayakumar.",
  keywords: ["AI Systems","Technical Product Owner","Fractional CTO","Agentic AI","Automation Engineering","Cognitive AI","Product Strategy","Enterprise Architecture"],
  authors: [{ name: "Shaashwath Vijayakumar", url: "https://sentients.in" }],
  openGraph: {
    type: "website", locale: "en_US", url: "https://sentients.in", siteName: "Sentients",
    title: "Sentients | AI Systems, Product Strategy & Cognitive Engineering",
    description: "Building intelligent systems across AI automation, product leadership and cognitive computing.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Sentients — Building Intelligent Systems" }],
  },
  twitter: { card: "summary_large_image", title: "Sentients | AI Systems, Product Strategy & Cognitive Engineering", description: "Building intelligent systems.", images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111111" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" style={{ backgroundColor: "var(--s-bg)", color: "var(--s-ink)" }} suppressHydrationWarning>
        <ThemeProvider>
          <WeatherLayer />
          <Nav />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
