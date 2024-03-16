"use client"
import SideNavbar from "@/components/side-navbar";
import {cn} from "@nextui-org/react";
import {ReactNode} from "react";
import Navigator from "@/components/navigator";
import {usePathname} from "next/navigation";

const Layout = ({children}:{children:ReactNode}) => {
    const pathname = usePathname()
    return (
        <div
            className={cn("min-h-screen w-full bg-white text-black flex ")}
        >
            <SideNavbar/>
            <div className="p-8 w-full flex-1 overflow-auto">
                {pathname !== "/home" && <Navigator/>}
                {children}
            </div>
        </div>
    );
};

export default Layout;