"use client"
import {usePathname} from "next/navigation";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import Link from "next/link";
import {useMemo} from "react";
const Navigator = () => {
    const pathArray = usePathname().split('/')
    const pathname = usePathname();

    const breadcrumbs = useMemo(() => {
        const segments = pathname.split("/").filter((item) => item !== "");
        return [
            ...segments.map((subpath, idx) => ({
                href: "/" + segments.slice(0, idx + 1).join("/"),
                text: subpath,
            })),
        ];
    }, [pathname]);

    return (
        <Breadcrumbs className="mb-5">
                {breadcrumbs.map((crumb, index) => (
                    <BreadcrumbItem key={crumb.href}>
                        {index < breadcrumbs.length - 1 ? (
                            <Link href={crumb.href}>{crumb.text}</Link>
                        ) : (
                            crumb.text
                        )}
                    </BreadcrumbItem>
                ))}
        </Breadcrumbs>
    );
};

export default Navigator;