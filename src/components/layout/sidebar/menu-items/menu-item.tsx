import { ButtonIcon } from "@ui/common/buttons/button-icon";
import { useAppSidebar } from "@ui/layout/sidebar/app-sidebar.hook";
import { MenuItemProps } from "@ui/layout/sidebar/app-sidebar.data";
import { clHexa } from "@styles/ts/colors-theme";
import { useState } from "react";
import { SidebarStateEnum } from "@stores/sidebar/sidebar.enum";

export const MenuItem = ({item } : { item: MenuItemProps}) => {
    const { getIsSidebarActive, handleExtendSidebar, sidebarState } = useAppSidebar();
    const [hover, setHover] = useState<SidebarStateEnum | null>(null);

    const isExtendSidebarActive = item.extendSidebarIndex;
    const handleClick = isExtendSidebarActive ? () => handleExtendSidebar(item) : undefined;
    const linkHref = isExtendSidebarActive == null ? item.url : undefined;

    return (
        <>
            <ButtonIcon
            onClick={handleClick}
            isLink={!isExtendSidebarActive}
            key={item.title}
            href={linkHref}
            Icon={item.icon}
            iconColor={getIsSidebarActive(sidebarState?.sidebarActive, item.sidebarIndex) || hover == item.sidebarIndex ? clHexa["light"]["white"] : clHexa["light"]["black"]}
            className={getIsSidebarActive(sidebarState?.sidebarActive, item.sidebarIndex) || hover == item.sidebarIndex ? "menu-item-active" : "menu-item"}
            props={{
                onMouseOver: () => {
                setHover(item.sidebarIndex);
                },
                onMouseLeave: () => {
                setHover(null);
                }
            }}
            />
        </>
    );
}