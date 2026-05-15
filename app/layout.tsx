import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { HomepageProvider } from "@/store/homepageStore";

export const metadata: Metadata = {
  title: "DashX",
  description: "DashX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="DashX allows you to use both Fiat and Crypto to pay for everything you want. Integrate it into your website or use our app today!"
        />
        <meta
          name="keywords"
          content="dashx, Dashx, DashX, blockchain, cryptocurrency, decentralized, Ethereum, smart contracts, distributed ledger, blockchain technology, crypto, blockchain development, blockchain applications, digital currency, blockchain solutions, decentralized finance, DeFi, blockchain network, blockchain platform, blockchain integration "
        />

        <meta
          property="og:title"
          content="DashX | Lightning fast payments for everyone"
        />
        {/* <meta property="og:image" content={dashxLogo.src} /> */}
        <meta
          property="og:description"
          content="DashX allows you to use both Fiat and Crypto to pay for everything you want. Integrate it into your website or use our app today!"
        />
        <meta property="og:url" content="https://dashx.xyz" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="DashX | Lightning fast payments for everyone"
        />
        <meta
          name="twitter:description"
          content="DashX allows you to use both Fiat and Crypto to pay for everything you want. Integrate it into your website or use our app today!"
        />
        {/* <meta name="twitter:image" content={dashxLogo.src} /> */}
      </head>
      <body className={`!overflow-x-clip`}>
        <HomepageProvider>{children}</HomepageProvider>
        <Toaster />
      </body>
    </html>
  );
}
