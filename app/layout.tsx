import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#06182B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://charamasexport.com"),
  title: "Charamas Export Indonesia — Premium Indonesian Shisha Charcoal Briquettes",
  description:
    "Charamas Export Indonesia specializes in supplying Indonesian coconut shell charcoal briquettes for international shisha and hookah markets.",
  keywords: [
    "Charamas Export Indonesia",
    "Indonesian Shisha Charcoal Briquettes",
    "Coconut Shell Charcoal Briquettes",
    "Hookah Charcoal Indonesia",
    "Shisha Charcoal Exporter",
    "Indonesian Export Trading",
  ],
  authors: [{ name: "Charamas Export Indonesia" }],
  openGraph: {
    title: "Charamas Export Indonesia — Premium Indonesian Shisha Charcoal Briquettes",
    description:
      "100% Coconut Shell Charcoal Briquettes for Shisha & Hookah. Connecting quality-focused sourcing with professional export coordination.",
    url: "https://charamasexport.com",
    siteName: "Charamas Export Indonesia",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Charamas Export Indonesia Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-navy font-sans antialiased selection:bg-gold selection:text-navy">
        {children}
      </body>
    </html>
  );
}
