import { Moon, Sun1 } from "iconsax-react"

export const ButtonThemeMode = () => {
    return(
        <div className="w-[40px] h-[40px] rounded-[20px] overflow-hidden bg-blue-100">
            <div className="w-fit h-full flex transition-transform hover:-translate-x-1/2 bg-amber-200">
                <span className="w-[40px] h-[40px] flex justify-center items-center">
                    <Sun1 size="20" color="#FFC53D"/>
                </span>
                <span className="w-[40px] h-[40px] flex justify-center items-center bg-blue-300">
                    <Moon size="20" color="#0090FF"/>
                </span>
            </div>
        </div>
    )
}