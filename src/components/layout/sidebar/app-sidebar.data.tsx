
import { SidebarStateEnum } from "@stores/sidebar/sidebar.enum";
import { Graph, Home2, Icon, Profile2User, ProfileAdd } from "iconsax-react";

export interface MenuItemProps {
  title: string;
  url?: string;
  icon: Icon;
  sidebarIndex: SidebarStateEnum;
  extendSidebarIndex: SidebarStateEnum | null;
}

interface DropdownMenuProps {
  title: string;
  url?: string;
  items?: Array<DropdownMenuProps>;
  icon?: Icon;
}

interface SecondSidebarContentProps {
  [key: string]: DropdownMenuProps[];
}

interface DatasProps {
  user: {
    name: string;
    email: string;
    avatar: string | null;
  };
  firstSidebarContent: MenuItemProps[];
  secondSidebarContent: SecondSidebarContentProps;
}

export const datas: DatasProps = {
  // TODO: Supprimer quand données users recuperer dans sidebar
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "",
    },
    firstSidebarContent: [
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
    ],
    secondSidebarContent: {
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