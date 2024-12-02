import { Icon } from "iconsax-react";
import Link from "next/link";

interface ButtonIconContentProps{
    Icon : Icon;
    SecondaryIcon?: Icon;
    iconSize: number | string;
    iconColor: string;
    iconClassName?: string;
    secondaryIconClassName?: string;
}


interface ButtonIconProps extends ButtonIconContentProps{
    isLink: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
}

export const ButtonIcon = ({ isLink, Icon, SecondaryIcon, href, iconSize, iconColor, className, onClick, iconClassName, secondaryIconClassName, ...props } : ButtonIconProps) => {
    const btnContainer = `w-[40px] h-[40px] rounded-[20px] overflow-hidden bg-blue-100 ${className}`;

    return(
        <>
            {isLink && href ? (
                <Link href={href} className={btnContainer} onClick={onClick} {...props}>
                    <ButtonIconContent SecondaryIcon={SecondaryIcon} Icon={Icon} iconSize={iconSize} iconColor={iconColor} iconClassName={iconClassName} secondaryIconClassName={secondaryIconClassName} />
                </Link>
            ) : (
                <span className={btnContainer} onClick={onClick} {...props}>
                    <ButtonIconContent SecondaryIcon={SecondaryIcon} Icon={Icon} iconSize={iconSize} iconColor={iconColor} iconClassName={iconClassName} secondaryIconClassName={secondaryIconClassName} />
                </span>
            )}
       </>
    )
}

const ButtonIconContent = ({ Icon, SecondaryIcon, iconSize, iconColor, iconClassName, secondaryIconClassName } : ButtonIconContentProps) => {
    const iconContainer = `w-[40px] h-[40px] flex justify-center items-center`;

    return(
        <div className="w-fit h-full flex transition-transform hover:-translate-x-1/2">
            <span className={`${iconContainer} ${iconClassName}`}>
                <Icon size={iconSize} color={iconColor}/>
            </span>

            {SecondaryIcon ? (
                <span className={`${iconContainer} ${secondaryIconClassName}`}>
                    <SecondaryIcon size={iconSize} color={iconColor}/>
                </span>
            ) : (
                <span className={`${iconContainer} ${iconClassName}`}>
                    <Icon size={iconSize} color={iconColor}/>
                </span>
            )}
            
        </div>
    )
}