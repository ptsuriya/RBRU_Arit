import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbars from "../component/CustomNav/Navbars"
import ScrollObserver, { ScrollContext } from "@/utils/Scroll-observer"


const kanit = Kanit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic',],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      
      <head>
        
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body className={kanit.className}>
      <Navbars />
        {children}
        </body>
    </html>
  );
}
