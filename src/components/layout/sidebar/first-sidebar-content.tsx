import { SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu } from "@ui/shadcn/ui/sidebar";
import { datas } from "@ui/layout/sidebar/app-sidebar.data";
import { MenuItem } from "./menu-items/menu-item";

export const FirstSidebarContent = () => {

    return (
      <SidebarContent>
      <SidebarGroup className="pt-[100px]">
        <SidebarGroupContent className="px-1.5 md:px-0">
          <SidebarMenu>
             <div className="flex flex-col gap-[15px] h-[70%]">
              {datas?.firstSidebarContent?.map((item, i) => (
                <MenuItem key={i} item={item}/>
              ))}
            </div>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    );
}