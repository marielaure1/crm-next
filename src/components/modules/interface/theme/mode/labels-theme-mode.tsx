"use client"

import { ThemeModeEnum } from "@enums/theme-mode.enum";
import { cn } from "@shadcn/lib/utils";
import { useButtonThemeMode } from "@ui/modules/interface/theme/mode/theme-mode.hook";
import { Badge } from "@ui/shadcn/ui/badge";
import { useState } from "react";

export const LabelsThemeMode = () => {
    const {
        modes,
        currentMode,
        changeThemeMode
    } = useButtonThemeMode();
    const [hover, setHover] = useState<ThemeModeEnum | null>();

    return (
        <div className="flex flex-wrap gap-[10px]">
            {modes.map((mode, index) => (
                <Badge
                onClick={() => changeThemeMode(mode.value)}
                key={index} 
                variant={"default"}
                className={cn(
                    "px-[10px] py-[5px] flex gap-[10px] justify-center items-center rounded-md font-normal",
                    currentMode == mode.value || hover == mode.value
                    ? mode.backgroundColor
                    : "bg-transparent"
                )}
                onMouseOver={() => setHover(mode.value)} 
                onMouseLeave={() => setHover(null)} 
                >
                    <mode.icon size="16" color={(currentMode == mode.value || hover == mode.value) && mode.colorIconActive? mode.colorIconActive : mode.colorIcon}/>
                    <span className={cn((currentMode == mode.value || hover == mode.value) && mode.colorActive? mode.colorActive : mode.color)}>{mode.name}</span>
                </Badge>
            ))}
        </div>
    )
}

