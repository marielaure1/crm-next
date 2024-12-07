import { PageBreadcrumb } from "@ui/common/breadcrumb/page-breadcrumb"
import { Separator } from "@ui/shadcn/ui/separator"
import { SidebarTrigger } from "@ui/shadcn/ui/sidebar"

export const Topbar = () => {
    return (
        <header className="fixed top-0 flex shrink-0 items-center gap-2 w-full p-4 pl-0">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <PageBreadcrumb/>
        </header>
    )
}