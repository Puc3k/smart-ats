"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,
} from '@/components/ui/sidebar'
import { BarChart, Briefcase, Building2, LayoutGrid, MessagesSquare, Users } from 'lucide-react'
import React from 'react'
import { NavMain } from '@/components/nav-main'

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutGrid,
    },
    {
      title: "Candidates",
      url: "/dashboard/candidates",
      icon: Users,
    },
    {
      title: "Interviews",
      url: "#",
      icon: MessagesSquare
    },
    {
      title: "Jobs / Positions",
      url: "#",
      icon: Briefcase,
    },
    {
      title: "Analytics",
      url: "#",
      icon: BarChart,
    }
  ]
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              size="lg"
              className="text-base data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <Building2 className="!size-5"/>
                <span className="text-base font-semibold">Smart ATS</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <SidebarGroup/>
      </SidebarContent>
      <SidebarFooter/>
    </Sidebar>
  )
}