import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import './globals.css'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'
import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'
import { Toaster } from "@/components/ui/sonner"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Smart ATS',
  description: '',
}

export default function RootLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
    <body
      className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
    >
    <ClerkProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
      >

        <SidebarProvider>

          <AppSidebar/>

          <SidebarInset>
            <SiteHeader/>

            <main className="w-full">
              { children }
            </main>

          </SidebarInset>

        </SidebarProvider>

      </ThemeProvider>

    </ClerkProvider>
    <Toaster />
    </body>
    </html>
  )
}
