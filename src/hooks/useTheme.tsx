import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { setAttributeData } from "@utils/change-html";
import { setThemeMode } from "@stores/theme/theme.slice";
import { RootState, useAppDispatch } from "@stores/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cl } from "@styles/ts/colors";

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const [currentMode, setCurrentMode] = useState<ThemeModeEnum>();
    const [colorHexa, setColorHexa] = useState(cl[currentMode ? currentMode : ThemeModeEnum.LIGHT]);
    const themeStates = useSelector((state: RootState) => state.theme)
    const changeThemeMode = (theme: ThemeModeEnum, isSystem?: boolean) => {
        setAttributeData("html", "theme-mode", theme);
        setCurrentMode(theme)
        dispatch(setThemeMode({ mode: isSystem ? ThemeModeEnum.SYSTEM : theme }))
    };

    useEffect(() => {
        const modeState = themeStates.mode;
        
        if(modeState){
            const ls = localStorage.getItem("theme");
            const storage = ls === null ? null : JSON.parse(ls);
            let newMode: ThemeModeEnum;
            let isSystem = false;

            if(storage){
                newMode = currentMode || ThemeModeEnum.LIGHT;
            } else if(storage?.mode){
                newMode = storage.mode || ThemeModeEnum.LIGHT;
            } else{
                isSystem = true;
                const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
                newMode = ThemeModeEnum.SYSTEM;
                if(system){
                    setCurrentMode(ThemeModeEnum.DARK)
                } else {
                    setCurrentMode(ThemeModeEnum.LIGHT)
                }
            }

            changeThemeMode(newMode, isSystem);
        }
    }, [])

    useEffect(() => {
        setColorHexa(cl[currentMode ? currentMode : ThemeModeEnum.LIGHT]);
    }, [currentMode])
    
    
    return {
        currentMode,
        ThemeModeEnum,
        changeThemeMode,
        colorHexa
    }
}
