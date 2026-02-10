'use client'

import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import { Input } from '@/components/ui/input'
import { BellIcon, LoaderCircleIcon, SearchIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function SiteHeader () {
  const [isLoading ] = useState<boolean>(false)

  return (
    <header
      className="flex h-16 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-14">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1"/>
          <Separator orientation="vertical" className="mr-2 h-4"/>
        </div>

        <div className="flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-md">
            <div
              className="text-muted-foreground pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 peer-disabled:opacity-50">
              <SearchIcon className="size-4"/>
              <span className="sr-only">Search</span>
            </div>
            <Input
              id="id"
              type="search"
              placeholder="Search..."
              value=""
              onChange={ () => {} }
              className="peer px-9 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none"
            />
            { isLoading && (
              <div
                className="text-muted-foreground pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 peer-disabled:opacity-50">
                <LoaderCircleIcon className="size-4 animate-spin"/>
                <span className="sr-only">Loading...</span>
              </div>
            ) }
          </div>
        </div>
        <div className="flex ml-auto items-center gap-2">
          <SignedIn>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
              <BellIcon className="size-4" />
            </Button>
          </SignedIn>
        </div>
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <SignedOut>
          <SignInButton/>
          <SignUpButton>
            <button
              className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">*
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-8 w-8"
              }
            }}
          />
        </SignedIn>
      </div>
    </header>
  )
}
