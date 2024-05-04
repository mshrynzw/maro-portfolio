import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Favicon from "/public/images/Metadata/favicon.ico"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets : ["latin"] })

export const metadata : Metadata = {
  title : "mshr",
  description : "mshr",
  icons : [{ rel : "icon", url : Favicon.src }]
}

const RootLayout = ({ children } : Readonly<{ children : React.ReactNode }>) => {
  return (
    <html lang="ja">
    <body className={inter.className}>
    <div className="flex flex-col h-screen">
      <div className="sticky top-0"><Header/></div>
      <div className="flex-grow">{children}</div>
      <div className="sticky bottom-0"><Footer/></div>
    </div>
    </body>
    </html>
  )
}

export default RootLayout
