"use client"

import { IconCalendarClock, IconCalendarMonth, IconCalendarWeek, IconDots } from "@tabler/icons-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"


import Link from "next/link";


export function NavDocuments({
  items
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Reports</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover className="data-[state=open]:bg-accent rounded-sm">
                  <IconDots />
                  <span className="sr-only">More</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-36 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}>
                <DropdownMenuItem>
                  <IconCalendarClock />
                  <span>
                    <Link key="Today Sales" href="/dashboard/reports/today-sales">
                      Today Sales
                    </Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconCalendarWeek />
                  <span>
                    <Link key="Weekly Sales" href="/dashboard/reports/weekly-sales">
                      Weekly Sales
                    </Link>
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <IconCalendarMonth />
                  <span>
                    <Link key="Monthly Sales" href="/dashboard/reports/monthly-sales">
                      Monthly Sales 
                    </Link>
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
