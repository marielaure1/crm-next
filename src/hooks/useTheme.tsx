import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { setAttributeData } from "@utils/change-html";
import { setThemeColor, setThemeMode } from "@stores/theme/theme.slice";
import { RootState, useAppDispatch } from "@stores/store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { cl } from "@styles/ts/colors";
import { ThemeColorEnum } from "@stores/theme/theme.enum";

interface ThemeProps{
    name: ThemeColorEnum,
    color: string
}

export const useTheme = () => {
    const dispatch = useAppDispatch();
    const [currentMode, setCurrentMode] = useState<ThemeModeEnum>();
    const [currentColor, setCurrentColor] = useState<ThemeColorEnum>();
    const [colorHexa, setColorHexa] = useState(cl[currentMode ? currentMode : ThemeModeEnum.LIGHT]);
    const themeStates = useSelector((state: RootState) => state.theme)
    const changeThemeMode = (theme: ThemeModeEnum) => {
        setAttributeData("html", "theme-mode", theme);
        setCurrentMode(theme)
        dispatch(setThemeMode({ mode: theme }))
        const newState = {
            ...themeStates,
            mode: theme
        }
        localStorage.setItem("theme", JSON.stringify(newState));
    };
    const changeThemeColor = (theme: ThemeColorEnum) => {
      setAttributeData("html", "theme-color", theme);
      dispatch(setThemeColor({ color: theme }))
      const newState = {
          ...themeStates,
          color: theme
      }
      setCurrentColor(theme);
      localStorage.setItem("theme", JSON.stringify(newState));
    };
  
    const themes: ThemeProps[] = [
      {
        name: ThemeColorEnum.BLUE,
        color: "bg-blue"
      },
      {
        name: ThemeColorEnum.RED,
        color: "bg-red"
      }
    ];
    
    const initMode = () => {
        const ls = localStorage.getItem("theme");
        const storage = ls === null ? null : JSON.parse(ls);
        let newMode: ThemeModeEnum;
       
        if(storage?.mode){
            newMode = storage.mode;
        } else {
            const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
            newMode = ThemeModeEnum.SYSTEM;
            if(system){
                setCurrentMode(ThemeModeEnum.DARK)
            } else {
                setCurrentMode(ThemeModeEnum.LIGHT)
            }
        }

        changeThemeMode(newMode);
    }

    const initColor = () => {
        const ls = localStorage.getItem("theme");
        const storage = ls === null ? null : JSON.parse(ls);
        let newColor: ThemeColorEnum;
       
        if(storage?.color){
            newColor = storage.color;
        } else {
            newColor = ThemeColorEnum.BLUE;
        }

        changeThemeColor(newColor);
    }

    useEffect(() => {
        initMode();
        initColor();
    }, [])
    

    useEffect(() => {
        setColorHexa(cl[currentMode ? currentMode : ThemeModeEnum.LIGHT]);
    }, [currentMode])
    
    
    return {
        currentMode,
        ThemeModeEnum,
        changeThemeMode,
        colorHexa,
        themes, 
        changeThemeColor,
        currentColor
    }
}
