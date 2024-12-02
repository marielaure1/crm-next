import { AuthState } from "@stores/auth/auth.slice";
import { Middleware, MiddlewareAPI, Dispatch, AnyAction } from "@reduxjs/toolkit";
import { RootState } from "@stores/store";

export const authMiddleware: Middleware = (storeAPI: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (action: AnyAction) => {
    const result = next(action);
    const state: AuthState = storeAPI.getState().auth;
    localStorage.setItem("auth", JSON.stringify(state));

    return result;
};
