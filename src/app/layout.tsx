import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://attechnologiesind.com"),
  title: {
    default:
      "AT Technologies | Authorised Sumitomo Electric Cutting Tools Distributor in Bangalore",
    template: "%s | AT Technologies",
  },
  description:
    "AT Technologies is the authorised distributor of Sumitomo Electric cutting tools in Bangalore and Mysore, Karnataka, India. Specialists in Carbide, CBN (Cubic Boron Nitride) and Diamond (PCD) precision cutting tools, inserts, drills and endmills for the manufacturing industry.",
  keywords: [
    "Sumitomo distributor Bangalore",
    "Sumitomo cutting tools distributor",
    "Sumitomo carbide tools",
    "Sumitomo CBN tools",
    "Sumitomo diamond tools",
    "Sumitomo electric distributor India",
    "Sumitomo tools Karnataka",
    "Sumitomo tools Bangalore",
    "carbide cutting tools Bangalore",
    "CBN inserts India",
    "PCD tools distributor India",
    "diamond tools manufacturer India",
    "cutting tools distributor Bangalore",
    "carbide inserts supplier Bangalore",
    "drills endmills inserts Bangalore",
    "precision cutting tools South India",
    "AT Technologies Bangalore",
    "authorised Sumitomo dealer",
    "Sumitomo drills",
    "Sumitomo endmills",
    "Sumitomo inserts",
    "PCD tools Bangalore",
  ],
  authors: [{ name: "AT Technologies", url: "https://attechnologiesind.com" }],
  creator: "AT Technologies",
  publisher: "AT Technologies",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://attechnologiesind.com",
    siteName: "AT Technologies",
    title:
      "AT Technologies | Authorised Sumitomo Electric Cutting Tools Distributor in Bangalore",
    description:
      "Authorised distributor of Sumitomo Electric cutting tools in Bangalore. Carbide, CBN and Diamond (PCD) precision tooling solutions for manufacturing industries across India.",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AT Technologies | Authorised Sumitomo Electric Distributor — Bangalore",
    description:
      "Authorised distributor of Sumitomo Electric cutting tools. Carbide, CBN and Diamond tooling — Bangalore, Mysore, India.",
  },
  alternates: {
    canonical: "https://attechnologiesind.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
