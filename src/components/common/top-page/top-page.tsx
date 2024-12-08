import * as React from "react";

interface TopPageProps{
    title: string;
    children?: React.ReactNode;
}

export const TopPage = ({ title, children } : TopPageProps) => {
    return (
        <div className="w-full flex justify-between gap-[30px] pb-[30px] border-b-dashed">
            <h2 className="text-[32px]">{title}</h2>
            {children && children}
        </div>
    )
}