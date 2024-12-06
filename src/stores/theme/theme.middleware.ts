import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { UnknownAction, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "@stores/store";
import { ThemeState } from "@stores/theme/theme.slice";

export const themeMiddleware: Middleware = (api: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (action: UnknownAction) => {
    const result = next(action);
    const theme: ThemeState = api.getState().theme;

    const ls = localStorage.getItem("theme");
    let storage;

    try {
        storage = ls === null ? null : JSON.parse(ls);
    } catch (error) {
        console.error("Invalid JSON in localStorage for 'theme'. Resetting to system default.");
        storage = null;
    }

    if (storage == null) {
        localStorage.setItem("theme", JSON.stringify(ThemeModeEnum.SYSTEM));
        console.log("system");
    } else {
        localStorage.setItem("theme", JSON.stringify(theme.mode));
        console.log(theme.mode);
    }

    return result;
};
