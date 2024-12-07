import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ui/shadcn/ui/collapsible"
import { SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@ui/shadcn/ui/sidebar"
import { Minus, Plus } from "lucide-react"
import Link from "next/link"
import { datas } from "./app-sidebar.data"
import { useAppSidebar } from "./app-sidebar.hook"

export const SecondSidebarContent = () => {
    const { sidebarState } = useAppSidebar();

    return (
        <SidebarContent>
          <SidebarGroup className="px-[20px] pb-[20px] pt-[140px]">
            <SidebarMenu>
              {sidebarState?.sidebarActive && 
              datas?.secondSidebarContent[sidebarState?.sidebarActive]?.map((dropdownDatas, index) => (
                <Collapsible
                  key={index}
                  defaultOpen={index === 1}
                  className="group/collapsible "
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {dropdownDatas.url ? (
                          <Link href={dropdownDatas.url} className="">{dropdownDatas.title}</Link>
                        ) : (
                          <span className="">{dropdownDatas.title}</span>
                        )}
                        
                        <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                        <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {dropdownDatas.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {dropdownDatas.items.map((item, i) => (
                            <SidebarMenuSubItem key={i}>
                                <SidebarMenuSubButton
                                asChild
                                // isActive={item.isActive}
                                >
                                    {item?.url ? (
                                        <Link href={item.url}>{item.title}</Link>
                                    ) : (
                                        <span>{item.title}</span>
                                    )}
                                
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
    )
}