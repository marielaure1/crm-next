import { Moon, Sun1, Icon } from "iconsax-react";
import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { useTheme } from "@hooks/useTheme";
import { cl } from "@styles/ts/colors";

interface ThemeProps{
    name: string;
    icon: Icon;
    value: ThemeModeEnum;
    backgroundColor: string;
    color: string;
}

export const useButtonThemeMode = () => {
    const { currentMode, changeThemeMode } = useTheme();
    
    const modes: ThemeProps[] = [
        // { name: "system", icon: Sun1, value: ThemeModeEnum.SYSTEM, backgroundColor: "bg-amber-200", color: "#FFC53D" },
        { name: "light", icon: Sun1, value: ThemeModeEnum.LIGHT, backgroundColor: "bg-btn-theme-amber", color: cl["light"]["amber-800"]},
        { name: "dark", icon: Moon, value: ThemeModeEnum.DARK, backgroundColor: "bg-btn-theme-sky", color: cl["light"]["sky-800"]},
    ];
    //
    
    return {
        modes,
        currentMode,
        ThemeModeEnum,
        changeThemeMode
    }
}
