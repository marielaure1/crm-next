"use client"

import * as React from "react"
import { ArchiveX, Command, File, Inbox, Minus, Plus, Send, Trash2 } from "lucide-react"

import { NavUser } from "@ui/modules/interface/nav-user/nav-user";
import { Label } from "@ui/shadcn/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@ui/shadcn/ui/sidebar"
import { Switch } from "@ui/shadcn/ui/switch"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@ui/shadcn/ui/collapsible"
import Link from "next/link"
import { ButtonIcon } from "@ui/common/buttons/button-icon";
import { ButtonThemeMode } from "@ui/modules/interface/theme/mode/button-theme-mode";
import { useEffect } from "react";
import { Graph, Home2, ProfileAdd, Profile2User, Setting2 } from "iconsax-react";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { setSidebarActive, open, close } from "@stores/sidebar/sidebar.slice";
import { ExpendSidebarStateMode, SidebarStateEnum } from "@stores/sidebar/sidebar.enum";
import { RootState, useAppDispatch } from "@stores/store";
import { ButtonLanguage } from "@ui/modules/interface/theme/language/button-language";
import { ButtonThemeColor } from "@ui/modules/interface/theme/color/button-theme-color";

// This is sample data
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "",
  },
  navMain: [
    {
      title: "Inbox",
      url: "#",
      icon: Inbox,
      isActive: true,
    },
    {
      title: "Drafts",
      url: "#",
      icon: File,
      isActive: false,
    },
    {
      title: "Sent",
      url: "#",
      icon: Send,
      isActive: false,
    },
    {
      title: "Junk",
      url: "#",
      icon: ArchiveX,
      isActive: false,
    },
    {
      title: "Trash",
      url: "#",
      icon: Trash2,
      isActive: false,
    },
  ],
  mails: [
    {
      name: "William Smith",
      email: "williamsmith@example.com",
      subject: "Meeting Tomorrow",
      date: "09:34 AM",
      teaser:
        "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
    },
    {
      name: "Alice Smith",
      email: "alicesmith@example.com",
      subject: "Re: Project Update",
      date: "Yesterday",
      teaser:
        "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
    },
    {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      subject: "Weekend Plans",
      date: "2 days ago",
      teaser:
        "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      subject: "Re: Question about Budget",
      date: "2 days ago",
      teaser:
        "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
    },
    {
      name: "Michael Wilson",
      email: "michaelwilson@example.com",
      subject: "Important Announcement",
      date: "1 week ago",
      teaser:
        "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
    },
    {
      name: "Sarah Brown",
      email: "sarahbrown@example.com",
      subject: "Re: Feedback on Proposal",
      date: "1 week ago",
      teaser:
        "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
    },
    {
      name: "David Lee",
      email: "davidlee@example.com",
      subject: "New Project Idea",
      date: "1 week ago",
      teaser:
        "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
    },
    {
      name: "Olivia Wilson",
      email: "oliviawilson@example.com",
      subject: "Vacation Plans",
      date: "1 week ago",
      teaser:
        "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
    },
    {
      name: "James Martin",
      email: "jamesmartin@example.com",
      subject: "Re: Conference Registration",
      date: "1 week ago",
      teaser:
        "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
    },
    {
      name: "Sophia White",
      email: "sophiawhite@example.com",
      subject: "Team Dinner",
      date: "1 week ago",
      teaser:
        "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
    },
  ],
  sideNav: {
    leads: [
      {
        title: "Clients",
        url: "/leads/clients",
        items: [
          {
            title: "Client 1",
            url: "/leads/clients/1",
          },
          {
            title: "Client 2",
            url: "#",
          },
        ],
      },
      {
        title: "Prospects",
        url: "/leads/prospects",
        items: [
          {
            title: "Prospect 1",
            url: "#",
          },
          {
            title: "Prospect 2",
            url: "#",
          },
        ],
      },
      {
        title: "Contacts",
        url: "/leads/contacts",
        items: [
          {
            title: "Contact 1",
            url: "#",
          },
          {
            title: "Contact 2",
            url: "#",
          },
        ],
      },
    ],
    reports: [
      {
        title: "Clients",
        url: "#",
        items: [
          {
            title: "Client 1",
            url: "#",
          },
          {
            title: "Client 2",
            url: "#",
          },
        ],
      },
      {
        title: "Prospects",
        url: "#",
        items: [
          {
            title: "Prospect 1",
            url: "#",
          },
          {
            title: "Prospect 2",
            url: "#",
          },
        ],
      },
      {
        title: "Contacts",
        url: "#",
        items: [
          {
            title: "Contact 1",
            url: "#",
          },
          {
            title: "Contact 2",
            url: "#",
          },
        ],
      },
    ],
    employees: [
      {
        title: "Employees",
        url: "#",
        items: [
          {
            title: "Client 1",
            url: "#",
          },
          {
            title: "Client 2",
            url: "#",
          },
        ],
      },
      {
        title: "Prospects",
        url: "#",
        items: [
          {
            title: "Prospect 1",
            url: "#",
          },
          {
            title: "Prospect 2",
            url: "#",
          },
        ],
      },
      {
        title: "Contacts",
        url: "#",
        items: [
          {
            title: "Contact 1",
            url: "#",
          },
          {
            title: "Contact 2",
            url: "#",
          },
        ],
      },
    ]
  }
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [activeItem, setActiveItem] = React.useState(data.navMain[0])
  const [mails, setMails] = React.useState(data.mails)
  const { setOpen, state } = useSidebar()
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const sidebarState = useSelector((state: RootState) => state.sidebar);

  useEffect(() => {
    handleSidebarPahtname();
  }, [pathname, dispatch])

  // useEffect(() => {
  //   localStorage.setItem("sidebar", JSON.stringify(sidebarState));
  // }, [sidebarState]);

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

  const handleSidebarPahtname = () => {
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
  
  
  const items = [
    {
      title: "Home",
      url: "/",
      icon: Home2,
      sidebarIndex: SidebarStateEnum.HOME,
      extendSidebarIndex: null
    },
    {
      title: "Leads",
      icon: ProfileAdd,
      sidebarIndex: SidebarStateEnum.LEADS,
      extendSidebarIndex: SidebarStateEnum.LEADS,
    },
    {
      title: "Report",
      icon: Graph,
      sidebarIndex: SidebarStateEnum.REPORTS,
      extendSidebarIndex: SidebarStateEnum.REPORTS,
    },
    {
      title: "Employee",
      icon: Profile2User,
      sidebarIndex: SidebarStateEnum.EMPLOYEES,
      extendSidebarIndex: SidebarStateEnum.EMPLOYEES,
    },
  ];

  const setExtendSidebarActive = (index : SidebarStateEnum | null) => {
    if (index && Object.values(SidebarStateEnum).includes(index)) {
      dispatch(setSidebarActive(index));
    } else {
      dispatch(setSidebarActive(null));
    }
  }

  const getIsSidebarActive = (sidebarActive: string | null, sidebarIndex: string): string => {
    return sidebarActive === sidebarIndex || sidebarActive === null ? true : false;
  };

  const handleExtendSidebar = (item) => {
    if(sidebarState.sidebarActive == item.sidebarIndex && state == "expanded"){
      handleSidebarPahtname();
      setOpen(false)
    } else {
      dispatch(setSidebarActive(item.sidebarIndex))
      setOpen(true)
    }
  }


  return (
    <Sidebar
      collapsible="icon"
      className="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row "
      {...props}
    >
      {/* This is the first sidebar */}
      {/* We disable collapsible and adjust width to icon. */}
      {/* This will make the sidebar appear as icons. */}
      <Sidebar
        collapsible="none"
        className="px-[10px] py-[20px]"
      >
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
        <SidebarContent>
          <SidebarGroup className="pt-[100px]">
            <SidebarGroupContent className="px-1.5 md:px-0">
              <SidebarMenu>
                {/* {data.navMain.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={{
                        children: item.title,
                        hidden: false,
                      }}
                      onClick={() => {
                        setActiveItem(item)
                        const mail = data.mails.sort(() => Math.random() - 0.5)
                        setMails(
                          mail.slice(
                            0,
                            Math.max(5, Math.floor(Math.random() * 10) + 1)
                          )
                        )
                        setOpen(true)
                      }}
                      isActive={activeItem.title === item.title}
                      className="w-btn-icon h-btn-icon flex items-center justify-center rounded-[20px]"
                    >
                      <item.icon />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))} */}
                 <div className="flex flex-col gap-[15px] h-[70%]">
                 {items?.map((item) => {
                    const isExtendSidebarActive = item.extendSidebarIndex;
                    const handleClick = isExtendSidebarActive ? () => handleExtendSidebar(item) : undefined;
                    const linkHref = isExtendSidebarActive == null ? item.url : undefined;

                    return (
                        <ButtonIcon
                        onClick={handleClick}
                        isLink={!isExtendSidebarActive}
                        key={item.title}
                        href={linkHref}
                        Icon={item.icon}
                        iconColor={getIsSidebarActive(sidebarState?.sidebarActive, item.sidebarIndex) ? "#FFFFFF" : "#101820"}
                        className={getIsSidebarActive(sidebarState?.sidebarActive, item.sidebarIndex) ? "menu-item-active" : "menu-item"}
                        />
                    );
                })}

                </div>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
         
          <div className="flex flex-col gap-[10px]">
            <ButtonThemeColor />
            <ButtonThemeMode />
            <ButtonIcon isLink={false} href={""} Icon={Setting2} iconColor={sidebarState?.sidebarActive == SidebarStateEnum.SETTINGS ? "#FFFFFF" : "#101820"} className={sidebarState?.sidebarActive == SidebarStateEnum.SETTINGS ? "menu-item-active" : "menu-item"} />
                <ButtonLanguage/>
            <NavUser user={data.user} />
          </div>
        </SidebarFooter>
      </Sidebar>

      {/* This is the second sidebar */}
      {/* We disable collapsible and let it fill remaining space */}
      <Sidebar collapsible="none" className="hidden flex-1 md:flex py-[20px] border-l ml-[2px]">
        
        <SidebarContent>
          <SidebarGroup className="px-[20px] pb-[20px] pt-[140px]">
            <SidebarMenu>
              {sidebarState?.sidebarActive && data?.sideNav[sidebarState?.sidebarActive]?.map((item, index) => (
                <Collapsible
                  key={item.title}
                  defaultOpen={index === 1}
                  className="group/collapsible "
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item.url ? (
                          <Link href={item.url} className="">{item.title}</Link>
                        ) : (
                          <span className="">{item.title}</span>
                        )}
                        
                        <Plus className="ml-auto group-data-[state=open]/collapsible:hidden" />
                        <Minus className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.items?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                asChild
                                isActive={item.isActive}
                              >
                                <Link href={item.url}>{item.title}</Link>
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
      </Sidebar>
    </Sidebar>
  )
}
