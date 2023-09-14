import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/Footer'
import AuthProvider from '@/components/AuthProvider/AuthProvider'

const inter = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Blogger',
  description: 'Blogger ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>

        <div className='pt-6'>


          <Navbar />
          {children}
          <Footer />
        </div>
        </AuthProvider>

      </body>

    </html>
  )
}
