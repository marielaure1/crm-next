
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@stores/store";
import { SidebarState } from "@stores/sidebar/sidebar.slice";

export const sidebarMiddleware: Middleware = (api: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    const state: SidebarState = api.getState().sidebar;

    localStorage.setItem("sidebar", JSON.stringify(state));

    return result;
};
