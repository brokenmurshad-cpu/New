import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import CustomCursor from "@/components/layout/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ClickRipple from "@/components/layout/ClickRipple";
import Particles from "@/components/layout/Particles";
import { seo, personal } from "@/data/content";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: personal.fullName }],
  creator: personal.fullName,
  robots: { index: true, follow: true },
  alternates: { canonical: seo.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    siteName: `${personal.fullName} — Portfolio`,
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: personal.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/images/profile.jpg"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.fullName,
  jobTitle: personal.roles,
  url: seo.url,
  image: `${seo.url}/images/profile.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dubai",
    addressCountry: "UAE",
  },
  email: personal.email,
  sameAs: ["https://www.github.com/Mhusnain0027", personal.website],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${syne.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Preloader />
        <CustomCursor />
        <ClickRipple />
        <Particles />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
