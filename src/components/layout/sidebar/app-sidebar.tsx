"use client"

import * as React from "react"

import {
  Sidebar,
} from "@ui/shadcn/ui/sidebar"
import { FirstSidebarHeader } from "@ui/layout/sidebar/first-sidebar-header";
import { FirstSidebarContent } from "@ui/layout/sidebar/first-sidebar-content";
import { FirstSidebarFooter } from "@ui/layout/sidebar/first-sidebar-footer";
import { SecondSidebarContent } from "@ui/layout/sidebar/second-sidebar-content";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  

  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row "
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="px-[10px] py-[20px]"
      >
        <FirstSidebarHeader/>
        <FirstSidebarContent/>
        <FirstSidebarFooter/>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex py-[20px] border-l ml-[2px]">
        <SecondSidebarContent/>
      </Sidebar>
    </Sidebar>
  )
}
