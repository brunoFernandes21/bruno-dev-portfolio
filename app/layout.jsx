import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const poppins = Poppins({
  weight: ['400', "700"],
  subsets: ["latin"]
})
export const metadata = {
  title: 'Bruno Fernandes | Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <main>
        {children}
        </main>
      </body>
    </html>
  )
}
