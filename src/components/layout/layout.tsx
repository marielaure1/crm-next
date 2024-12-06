import { PageBreadcrumb } from "@ui/common/breadcrumb/page-breadcrumb"
import { AppSidebar } from "@ui/layout/sidebar/app-sidebar"
import { Separator } from "@ui/shadcn/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@ui/shadcn/ui/sidebar"

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
        <header className="sticky top-0 flex shrink-0 items-center gap-2 bg-background p-4 pl-0">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <PageBreadcrumb/>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pl-0">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
