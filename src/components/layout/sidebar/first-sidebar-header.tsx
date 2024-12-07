import { SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@ui/shadcn/ui/sidebar";
import { Command } from "lucide-react";
import Link from "next/link";

export const FirstSidebarHeader = () => {
    return (
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <Link href="#" >
                  <div className="flex aspect-square w-btn-icon h-btn-icon rounded-[20px] items-center justify-center bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Acme Inc</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
    );
}