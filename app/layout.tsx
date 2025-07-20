//Genel soyfa düzeni burda yapılır.
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { siteMetadata } from "@/lib/siteMetadata";
import ReduxProvider from "@/components/ReduxProviderr";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template:`%s | ${siteMetadata.title}`,  // sayfa başlığı(urlnın ustunde yazan yer)
    default:siteMetadata.title
  },                      
  description: siteMetadata.description,  // seo için ctrl+u yap ordakı belgede gorunuyor
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <ReduxProvider >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
          </ReduxProvider> 
      </body>
    </html>
  );
}
