import { AppSidebar } from "@ui/layout/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
} from "@ui/shadcn/ui/sidebar";
import { Topbar } from "@ui/layout/topbar/topbar";

export const Layout = ({ children } : { children: React.ReactNode }) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "280px",
        } as React.CSSProperties
      }
    >
      
      <AppSidebar />
      <SidebarInset>
        <Topbar/>
        <div className="flex flex-1 flex-col gap-4 p-[15px] pl-0 pt-[60px]">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
