import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpecialisationSection from "@/components/SpecialisationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// JSON-LD structured data for LocalBusiness + Organization (SEO)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://attechnologiesind.com/#organization",
      "name": "AT Technologies",
      "url": "https://attechnologiesind.com",
      "logo": "https://attechnologiesind.com/images/at-logo.png",
      "image": "https://attechnologiesind.com/images/at-logo.png",
      "description":
        "AT Technologies is an authorised distributor of Sumitomo Electric cutting tools in Bangalore and Mysore, Karnataka, India. We specialise in carbide, CBN, diamond, PCD cutting tools, drills, endmills and inserts for precision manufacturing.",
      "foundingLocation": {
        "@type": "Place",
        "name": "Bangalore and Mysore, Karnataka, India",
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "arvind.attechnologies@gmail.com",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi", "Kannada"],
      },
      "sameAs": [],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://attechnologiesind.com/#localbusiness",
      "name": "AT Technologies",
      "url": "https://attechnologiesind.com",
      "description":
        "Authorised Sumitomo Electric cutting tools distributor in Bangalore. Specialists in carbide inserts, CBN tools, diamond PCD tools, drills, endmills, inserts for CNC machining and manufacturing.",
      "email": "arvind.attechnologies@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No.20, Mahalakshmi Nilaya, Nisarga Layout, Abbigere",
        "addressLocality": "Bangalore",
        "addressRegion": "Karnataka",
        "postalCode": "560090",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0827,
        "longitude": 77.5877,
      },
      "areaServed": [
        "Bangalore", "Karnataka", "South India", "India"
      ],
      "knowsAbout": [
        "Sumitomo Electric Cutting Tools",
        "Tungsten Carbide Inserts",
        "CBN Inserts",
        "Diamond PCD Tools",
        "Milling Endmills and Drills",
        "Industrial CNC Machining Tools Bangalore"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Sumitomo Electric Cutting Tools Distribution",
        "itemListElement": [
          {
            "@type": "Service",
            "name": "Sumitomo Carbide Cutting Tools",
            "description": "Authorised distribution of Sumitomo carbide inserts, carbide end mills, and drills for turning and milling.",
            "provider": {
              "@type": "Organization",
              "name": "AT Technologies"
            },
            "areaServed": "Bangalore, Karnataka, India"
          },
          {
            "@type": "Service",
            "name": "Sumitomo CBN Cutting Tools",
            "description": "Supply of Sumitomo CBN (Cubic Boron Nitride) tooling for hard turning of hardened steels, cast iron, and high-temp alloys.",
            "provider": {
              "@type": "Organization",
              "name": "AT Technologies"
            },
            "areaServed": "Bangalore, Karnataka, India"
          },
          {
            "@type": "Service",
            "name": "Sumitomo Diamond PCD Cutting Tools",
            "description": "Supply of Sumitomo PCD (Poly-Crystalline Diamond) tools for high-precision aluminium, composite, and non-ferrous machining.",
            "provider": {
              "@type": "Organization",
              "name": "AT Technologies"
            },
            "areaServed": "Bangalore, Karnataka, India"
          }
        ]
      }
    },
  ],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialisationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
