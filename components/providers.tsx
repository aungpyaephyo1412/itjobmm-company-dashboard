"use client"
import {NextUIProvider} from "@nextui-org/react";
import {ReactNode} from "react";

const Providers = ({children}:{children:ReactNode}) => {
    return (
        <NextUIProvider className="w-full flex-1">
            {children}
        </NextUIProvider>
    );
};

export default Providers;