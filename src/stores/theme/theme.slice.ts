import { ThemeModeEnum, ThemeColorEnum } from "@stores/theme/theme.enum";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState{
    mode: ThemeModeEnum;
    color: ThemeColorEnum;
}

const initialState : ThemeState = {
    mode: ThemeModeEnum.SYSTEM,
    color: ThemeColorEnum.BLUE
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setThemeColor: (
            state,
            actions: {
                payload: {
                    color: ThemeColorEnum
                }
            }
        ) => {
            state.color = actions.payload.color;
        },
        setThemeMode: (
            state,
            actions: {
                payload: {
                    mode: ThemeModeEnum
                }
            }
        ) => {
            state.mode = actions.payload.mode
        }
    }
})

export const { setThemeColor, setThemeMode } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;