import { cn } from "@ui/shadcn/lib/utils";
import { Icon as IconType } from "iconsax-react";
import Link from "next/link";

interface ButtonIconContentProps{
    Icon? : IconType;
    SecondaryIcon?: IconType;
    iconSize?: number | string;
    iconColor?: string;
    iconClassName?: string;
    secondaryIconClassName?: string;
    text: string;
    textClassName?: string;
}


interface ButtonIconProps extends ButtonIconContentProps{
    isLink: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
    props?: any;
}

export const Button = ({ text, textClassName, isLink, Icon, SecondaryIcon, href, iconSize, iconColor, className, onClick, iconClassName, secondaryIconClassName, props } : ButtonIconProps) => {
    const btnContainer = `cursor-pointer w-fit h-[42px] px-[10px] relative rounded-[20px] overflow-hidden flex flex-col ${className}`;

    return(
        <>
            {isLink && href ? (
                <Link href={href} className={btnContainer} onClick={onClick} {...props}>
                    {Icon && <ButtonIconContent text={text} textClassName={textClassName} SecondaryIcon={SecondaryIcon} Icon={Icon} iconSize={iconSize} iconColor={iconColor} iconClassName={iconClassName} secondaryIconClassName={secondaryIconClassName} />}
                    
                </Link>
            ) : (
                <span className={btnContainer} onClick={onClick} {...props}>
                    {Icon && <ButtonIconContent text={text} textClassName={textClassName} SecondaryIcon={SecondaryIcon} Icon={Icon} iconSize={iconSize} iconColor={iconColor} iconClassName={iconClassName} secondaryIconClassName={secondaryIconClassName} />}
                </span>
            )}
       </>
    )
}

const ButtonIconContent = ({ text, textClassName, Icon, SecondaryIcon, iconSize, iconColor, iconClassName, secondaryIconClassName } : ButtonIconContentProps) => {
    const iconContainer = `w-fit h-full flex gap-[8px] justify-center items-center`;
    const size = iconSize || "16";
    const color = iconColor || "#101820";
    const textStyle = `text-md ${textClassName}`

    return(
        <div className="transition-transform h-full -translate-y-0 hover:-translate-y-full">
            <span className={`${iconContainer} ${iconClassName}`}>
                {Icon && <Icon size={size} color={color}/>}
                <span className={textStyle}>{text}</span>
            </span>

            {SecondaryIcon ? (
                <span className={`${iconContainer} ${secondaryIconClassName} `}>
                    <SecondaryIcon size={size} color={color}/>
                    <span className={textStyle}>{text}</span>
                </span>
            ) : (
                <span className={`${iconContainer} ${iconClassName}`}>
                    {Icon && <Icon size={size} color={color}/>}
                    <span className={textStyle}>{text}</span>
                </span>
            )}
        </div>
    )
}