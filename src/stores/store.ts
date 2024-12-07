import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "@stores/auth/auth.slice";
import { authMiddleware } from "@stores/auth/auth.middleware";
import { sidebarReducer } from "@stores/sidebar/sidebar.slice";
import { sidebarMiddleware } from "@stores/sidebar/sidebar.middleware";
import { themeReducer } from "@stores/theme/theme.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    sidebar: sidebarReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware, sidebarMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store