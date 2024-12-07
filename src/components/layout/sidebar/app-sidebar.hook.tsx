"use client"

import {
  useSidebar,
} from "@ui/shadcn/ui/sidebar"
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { setSidebarActive, open, close } from "@stores/sidebar/sidebar.slice";
import { ExpendSidebarStateMode, SidebarStateEnum } from "@stores/sidebar/sidebar.enum";
import { RootState, useAppDispatch } from "@stores/store";
import { MenuItemProps } from "@ui/layout/sidebar/app-sidebar.data";

export const useAppSidebar = () => {
  const { setOpen, state } = useSidebar();
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebarState = useSelector((state: RootState) => state.sidebar);

  useEffect(() => {
    handleSidebarPahtname();
  }, [pathname, dispatch])

  useEffect(() => {
    const expendSidebarMode = sidebarState.expendSidebarMode;
    if(expendSidebarMode == ExpendSidebarStateMode.OPEN){
      setOpen(true)
      dispatch(open())
    } else {
      setOpen(false)
      dispatch(close())
    }
  }, [])

  useEffect(() => {
    
    if(state == "expanded"){
      dispatch(open())
    } else {
      dispatch(close())
    }
  }, [state])

  const handleSidebarPahtname = () : void => {
    if (pathname) {
      const pathnameSplit = pathname.split("/");
      if(pathname == "/"){
        dispatch(setSidebarActive(SidebarStateEnum.HOME));
      } else if (pathnameSplit[1] && Object.values(SidebarStateEnum).includes(pathnameSplit[1] as SidebarStateEnum)) {
        dispatch(setSidebarActive(pathnameSplit[1] as SidebarStateEnum));
      } else {
        dispatch(setSidebarActive(null));
      }
    }
  }

  const getIsSidebarActive = (sidebarActive: string | null, sidebarIndex: string): boolean => {
    return sidebarActive === sidebarIndex || sidebarActive === null ? true : false;
  };

  const handleExtendSidebar = (item: MenuItemProps) : void => {
    if(sidebarState.sidebarActive == item.sidebarIndex && state == "expanded"){
      handleSidebarPahtname();
      setOpen(false)
    } else {
      dispatch(setSidebarActive(item.sidebarIndex))
      setOpen(true)
    }
  }

  return {
    getIsSidebarActive, 
    handleExtendSidebar, 
    sidebarState
  }
}
