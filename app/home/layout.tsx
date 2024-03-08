"use client"
import {ReactNode} from "react";
import Link from "next/link";
import {cn} from "@nextui-org/react";
import {usePathname} from "next/navigation";

const Layout = ({children}:{children:ReactNode}) => {
    const pathname = usePathname()
    return (
        <div className="flex items-center">
            <div className="h-screen min-w-64 overflow-y-auto p-5 space-y-8 bg-gray-200">
                <Link href={"/home"} className="w-full text-2xl font-bold">Dashboard</Link>
                <div className="flex flex-col space-y-5">
                    <Link href={"/home"} className={cn("w-full px-3 py-2 rounded",pathname === "/home" && "text-white bg-gray-400")}>Profile</Link>
                    <Link href={"/home/jobs"} className={cn("w-full px-3 py-2 rounded",pathname === "/home/jobs" && "text-white bg-gray-400")}>Jobs</Link>
                </div>
            </div>
            <div className="flex-1 h-screen overflow-y-auto p-5">
                {children}
            </div>
        </div>
    );
};

export default Layout;