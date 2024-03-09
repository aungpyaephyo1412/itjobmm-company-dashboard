/** @format */
"use client";

import { useState } from "react";

type Props = {};

import {
    User,
    Building,
    ChevronRight, ChevronLeft
} from "lucide-react";
import {Nav} from "@/components/nav";
import {useWindowSize} from "usehooks-ts";
import {cn} from "@nextui-org/react";


export default function SideNavbar({}: Props) {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const {width} = useWindowSize();
    const mobileWidth = width < 768;

    function toggleSidebar() {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className={cn("relative min-w-[80px] border-r px-3  pb-10 pt-24")}>
            {!mobileWidth && (
                <div className="absolute right-[-20px] top-7">
                    <button
                        className="p-2 bg-gray-300/20 backdrop-blur rounded-full"
                        onClick={toggleSidebar}
                    >
                        {isCollapsed ? <ChevronRight /> : <ChevronLeft/>}
                    </button>
                </div>
            )}
            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Profile",
                        href: "/home",
                        icon: User,
                        color: "primary"
                    },
                    {
                        title: "Jobs",
                        href: "/home/jobs",
                        icon: Building,
                        color: "primary"
                    }
                ]}
            />
        </div>
    );
}
