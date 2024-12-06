import { cn } from "@shadcn/lib/utils";
import { useAppDispatch } from "@stores/store";
import { ThemeColorEnum } from "@stores/theme/theme.enum";
import { setThemeColor } from "@stores/theme/theme.slice";
import { setAttributeData } from "@utils/change-html";

interface ThemeProps{
  name: ThemeColorEnum,
  color: string
}

export const ButtonThemeColor = () => {
  const dispatch = useAppDispatch();
  const changeThemeColor = (theme: ThemeColorEnum) => {
    setAttributeData("html", "theme-color", theme);
    dispatch(setThemeColor({ color: theme }))
  };

  const themes: ThemeProps[] = [
    {
      name: ThemeColorEnum.BLUE,
      color: "bg-sky-600"
    },
    {
      name: ThemeColorEnum.RED,
      color: "bg-red-600"
    }
  ];
  
  return (
    <div className='flex flex-col gap-2'>
      {themes.map((theme, index) => (
        <span key={index} className={cn(theme.color, "w-4 h-4 rounded-lg")} onClick={() => changeThemeColor(theme.name)}></span>
      ))}
    </div>
  )
}