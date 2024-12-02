import Link from "next/link"

export const ButtonIcon = ({ Icon, href, size, color, className }) => {
    return(
        <Link href={href} className={`w-[40px] h-[40px] rounded-[20px] overflow-hidden bg-blue-100 ${className}`}>
            <div className="w-fit h-full flex transition-transform hover:-translate-x-1/2">
                <span className="w-[40px] h-[40px] flex justify-center items-center">
                    <Icon size={size} color={color}/>
                </span>
                <span className="w-[40px] h-[40px] flex justify-center items-center">
                    <Icon size={size} color={color}/>
                </span>
            </div>
        </Link>
    )
}