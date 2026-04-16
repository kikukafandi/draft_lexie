import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/layout/ServiceWorkerRegistration";

export const metadata: Metadata = {
  title: "LEXSEE - Online Legal & Digital Reading Platform",
  description: "Online Legal Tool & Digital Reading Platform",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "LEXSEE",
  },
};

export const viewport: Viewport = {
  themeColor: "#8A1410",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full">
      <body className="min-h-full bg-[#F2F2F2]">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
