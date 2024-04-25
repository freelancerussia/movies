import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './styles/globals.scss'
import Header from '@/components/Header/Header'
import React from 'react'
import Footer from '@/components/Footer/Footer'

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
    title: 'Movie database',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={montserrat.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
