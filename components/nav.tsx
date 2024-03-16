/** @format */

"use client";

import Link from "next/link";
import {LucideIcon} from "lucide-react";
import {usePathname} from "next/navigation";
import {Button, cn, Tooltip} from "@nextui-org/react";

interface NavProps {
    isCollapsed: boolean;
    links: {
        title: string;
        label?: string;
        icon: LucideIcon;
        color: "default" | "primary";
        href: string;
    }[];
}

const Nav = ({links, isCollapsed}: NavProps) => {
    const pathName = usePathname();
    return (
        <>
            <div
                data-collapsed={isCollapsed}
                className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
            >
                <div
                    className="grid gap-1 px-1 lg:px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
                    {links.map((link, index) =>
                            (
                                <Link key={index}
                                    href={link.href}
                                    className="text-default-900 active:bg-none max-w-full"
                                >
                                    <div
                                        className={cn(
                                            pathName === link.href
                                                ? "bg-primary-100 [&_svg_path]:fill-primary-500"
                                                : "hover:bg-default-100",
                                            "flex gap-2 w-full min-h-[44px] h-full items-center px-2 lg:px-3.5 rounded-xl cursor-pointer transition-all duration-150 active:scale-[0.98]"
                                        )}
                                    >
                                        <link.icon size={20}/>
                                        {<span className={cn("text-default-900 hidden",isCollapsed ? "hidden" : "lg:block")}>{link.title}</span>}
                                    </div>
                                </Link>
                            )
                    )}
                </div>
            </div>
        </>
    );
};
export default Nav