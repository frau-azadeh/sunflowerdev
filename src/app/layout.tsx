import type { Metadata } from "next";

import "../styles/fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "وب سایت آزاده شریفی سلطانی",
  description:
    "من آزاده شریفی سلطانی هستم. ‌سایت من در زمینه برنامه نویسی هست و خوشحال میشم با هم اطلاعاتمون رو اینجا به اشتراک بزاریم",
  authors: [{ name: "آزاده شریفی سلطانی", url: "https://sunflower-dev.com" }],
  keywords: [
    "آزاده شریفی سلطانی",
    "برنامه نویسی",
    "توسعه وب",
    "آموزش برنامه نویسی",
    "فرانت اند",
  ],
  openGraph: {
    title: "وب سایت آزاده شریفی سلطانی",
    description:
      "سایت من در زمینه برنامه نویسی هست و خوشحال میشم با هم اطلاعاتمون رو اینجا به اشتراک بزاریم.",
    url: "https://sunflower-dev.com",
    siteName: "وب سایت آزاده شریفی سلطانی",
    images: [
      {
        url: "/images/about/azadeh.webp",
        width: 1200,
        height: 630,
        alt: "آزاده شریفی سلطانی",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "وب سایت آزاده شریفی سلطانی",
    description:
      "سایت من در زمینه برنامه نویسی هست و خوشحال میشم با هم اطلاعاتمون رو اینجا به اشتراک بزاریم.",
    creator: "@Azadeh_sharifi",
    images: ["/images/about/azadeh.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <head>
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "آزاده شریفی سلطانی",
              url: "https://sunflower-dev.com",
              image: "images/about/azadeh.webp",
              sameAs: [
                "https://twitter.com/Azadeh_sharifi",
                "https://linkedin.com/in/azadeh-sharifi-soltani",
                "https://github.com/frau-azadeh",
                "https://instagram.com/frau_azadeh",
              ],
              jobTitle: "برنامه نویس فرانت و توسعه‌دهنده وب",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://sunflower-dev.com",
              name: "وب سایت آزاده شریفی سلطانی",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://sunflower-dev.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body dir="rtl" className="bg-[#fff8e1]">
        {children}
      </body>
    </html>
  );
}
