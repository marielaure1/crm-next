import { ExpendSidebarStateEnum } from '@stores/sidebar/sidebar.enum';

export type SidebarAction = {
    type: ExpendSidebarStateEnum;
};

export const Open = (): SidebarAction => ({
    type: ExpendSidebarStateEnum.OPEN,
});

export const Close = (): SidebarAction => ({
    type: ExpendSidebarStateEnum.CLOSE,
});