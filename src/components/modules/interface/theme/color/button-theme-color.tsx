import { useTheme } from "@hooks/useTheme";
import { cn } from "@shadcn/lib/utils";
import { useAppDispatch } from "@stores/store";
import { ThemeColorEnum } from "@stores/theme/theme.enum";
import { setThemeColor } from "@stores/theme/theme.slice";
import { setAttributeData } from "@utils/change-html";
import { Check } from "lucide-react";


export const ButtonThemeColor = () => {
  const { themes, changeThemeColor, currentColor } = useTheme();
  
  return (
    <div className='flex flex-wrap gap-3'>
      {themes.map((theme, index) => (
        <span 
        key={index} 
        className={cn(theme.color, "w-4 h-4 rounded-lg flex items-center justify-center")} 
        onClick={() => changeThemeColor(theme.name)}
        >
          {theme.name == currentColor && <Check className="text-white size-3" /> }
        </span>
      ))}
    </div>
  )
}