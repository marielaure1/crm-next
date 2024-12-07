"use client"

import { cn } from "@shadcn/lib/utils";
import { useButtonThemeMode } from "@ui/modules/interface/theme/mode/theme-mode.hook";

export const ButtonThemeMode = () => {
    const {
        modes,
        currentMode,
        ThemeModeEnum,
        changeThemeMode
    } = useButtonThemeMode();
    
    return(
        <div className="w-btn-icon h-btn-icon rounded-[20px] overflow-hidden bg-blue-100">
            <div className={cn(
                currentMode == ThemeModeEnum.LIGHT ? "translate-x-0 hover:-translate-x-1/2" : "-translate-x-1/2 hover:translate-x-0",
                "w-fit h-full flex transition-transform"
            )}>
                {modes.filter((mode) => mode.value !== ThemeModeEnum.SYSTEM).map((mode, index) => (
                    <span
                    key={index} 
                    className={cn(
                        mode.backgroundColor, 
                        "w-btn-icon h-btn-icon flex justify-center items-center"
                    )} 
                    onClick={() => changeThemeMode(mode.value)}
                    >
                        <mode.icon size="16" color={mode.colorIconActive || mode.colorIcon}/>
                    </span>
                ))}
            </div>
        </div>

       
    )
}
