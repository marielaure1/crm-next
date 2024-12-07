import { Icon } from "iconsax-react";
import Link from "next/link";

interface ButtonIconContentProps{
    Icon : Icon;
    SecondaryIcon?: Icon;
    iconSize?: number | string;
    iconColor?: string;
    iconClassName?: string;
    secondaryIconClassName?: string;
}


interface ButtonIconProps extends ButtonIconContentProps{
    isLink: boolean;
    href?: string;
    className?: string;
    onClick?: () => void;
    props?: any;
}

export const ButtonIcon = ({ isLink, Icon, SecondaryIcon, href, iconSize, iconColor, className, onClick, iconClassName, secondaryIconClassName, props } : ButtonIconProps) => {
    const btnContainer = `w-btn-icon h-btn-icon rounded-[20px] overflow-hidden flex ${className}`;

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
    const iconContainer = `w-btn-icon h-btn-icon flex justify-center items-center`;
    const size = iconSize || "16";
    const color = iconColor || "#101820";

    return(
        <div className="w-fit h-full flex transition-transform hover:-translate-x-1/2">
            <span className={`${iconContainer} ${iconClassName}`}>
                <Icon size={size} color={color}/>
            </span>

            {SecondaryIcon ? (
                <span className={`${iconContainer} ${secondaryIconClassName}`}>
                    <SecondaryIcon size={size} color={color}/>
                </span>
            ) : (
                <span className={`${iconContainer} ${iconClassName}`}>
                    <Icon size={size} color={color}/>
                </span>
            )}
        </div>
    )
}