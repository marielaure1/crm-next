import { SidebarFooter } from "@ui/shadcn/ui/sidebar";
import { datas } from "@ui/layout/sidebar/app-sidebar.data";
import { ButtonThemeMode } from "@ui/modules/interface/theme/mode/button-theme-mode";
import { ButtonLanguage } from "@ui/modules/interface/theme/language/button-language";
import { NavUser } from "@ui/modules/interface/nav-user/nav-user";
import { Setting2 } from "iconsax-react";
import { SidebarStateEnum } from "@stores/sidebar/sidebar.enum";
import { MenuItem } from "./menu-items/menu-item";

export const FirstSidebarFooter = () => {

    return (
      <SidebarFooter>
        <div className="flex flex-col gap-[10px]">
          <ButtonThemeMode />
          <MenuItem 
            item={{ 
            title: "Settings",
            url: "/settings",
            icon: Setting2,
            sidebarIndex: SidebarStateEnum.SETTINGS,
            extendSidebarIndex: SidebarStateEnum.SETTINGS
           }}/>
          {/* <ButtonLanguage/> */}
          <NavUser user={datas.user} />
        </div>
      </SidebarFooter>
    );
}