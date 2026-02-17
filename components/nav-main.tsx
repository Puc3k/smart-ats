'use client'

import { Upload } from 'lucide-react'
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface NavItem {
  title: string,
  url: string,
  icon?: React.ElementType
}

interface NavItemProps {
  items: NavItem[]
}

export function NavMain ({ items }: NavItemProps) {
  const pathname = usePathname()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              size="lg"
              tooltip="Quick Create"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground
              active:bg-primary/90 active:text-primary-foreground min-w-8 duration-200 ease-linear text-base"
            >
              <Upload/>
              <span>Upload CV</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          { items.map((item) => {
            const isActive = pathname === item.url
            const Icon = item.icon
            return (
              <SidebarMenuItem key={ item.title }>
                <SidebarMenuButton
                  asChild
                  tooltip={ item.title }
                  isActive={ isActive }
                  size="default"
                  className="text-base"
                >
                  <Link className="text-base" href={ item.url }>
                    { Icon && <Icon/> }
                    { item.title }
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }) }
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}