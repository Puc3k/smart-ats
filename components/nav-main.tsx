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

export interface NavItem {
  title: string,
  url: string,
  icon?: React.ElementType
}

interface NavItemProps {
  items: NavItem[]
}

export function NavMain ({ items }: NavItemProps) {
  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              size="default"
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
            const Icon = item.icon
            return (
              <SidebarMenuItem key={ item.title }>
                <SidebarMenuButton
                  tooltip={ item.title }
                  size="default"
                  className="text-base"
                >
                  { Icon && <Icon /> }
                  <span className="text-base">{ item.title }</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          }) }
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}