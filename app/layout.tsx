import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import { SiteHeader } from '@/components/site-header'

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
    <ClerkProvider>
      <SidebarProvider>
        <html lang="en">
        <body
          className={ `${ geistSans.variable } ${ geistMono.variable } antialiased` }
        >
        <AppSidebar />

        <SidebarInset>
          <SiteHeader/>

          <main className="w-full">
            { children }
          </main>

        </SidebarInset>
        </body>
        </html>
      </SidebarProvider>
    </ClerkProvider>
  )
}
