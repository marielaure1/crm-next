import { Moon, Sun1, Setting, Icon } from "iconsax-react";
import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { useTheme } from "@hooks/useTheme";
import { cl } from "@styles/ts/colors";

interface ThemeProps{
    name: string;
    icon: Icon;
    value: ThemeModeEnum;
    backgroundColor: string;
    color: string;
    colorActive?: string;
    colorIcon: string;
    colorIconActive?: string;
}

export const useButtonThemeMode = () => {
    const { currentMode, changeThemeMode } = useTheme();
    
    const modes: ThemeProps[] = [
        { 
            name: "System", 
            icon: Setting, 
            value: ThemeModeEnum.SYSTEM, 
            backgroundColor: "bg-btn-theme-background-system", 
            color: "text-btn-theme-foreground-system hover:text-btn-theme-foreground-system", 
            colorIcon: cl["light"]["gray-800"] 
        },
        { 
            name: "Light", 
            icon: Sun1, 
            value: ThemeModeEnum.LIGHT, 
            backgroundColor: "bg-btn-theme-background-light", 
            color: "text-btn-theme-foreground-light hover:text-btn-theme-foreground-light", 
            colorIcon: cl["light"]["amber-900"]
        },
        { 
            name: "Dark", 
            icon: Moon, 
            value: ThemeModeEnum.DARK, 
            backgroundColor: "bg-btn-theme-background-dark", 
            color: "text-btn-theme-foreground-dark-desactived hover:text-white", 
            colorActive: "text-btn-theme-foreground-dark",
            colorIcon: cl["dark"]["indigo-900"],
            colorIconActive: cl["light"]["white"]
        },
    ];
    //
    
    return {
        modes,
        currentMode,
        ThemeModeEnum,
        changeThemeMode
    }
}
