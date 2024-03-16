import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    metadataBase: new URL("https://devjobsmm.vercel.app"),
    title: {
        default: "IT Job MM / Dashboard",
        template: "%s | IT Job MM / Dashboard",
    },
    icons: [{rel: "icon", url: "/logo.png"}],
    description: "Let's connect with client!",
    openGraph: {
        title: "IT Job MM  / Dashboard",
        description: "Let's connect with client!",
        url: "https://devjobsmm.vercel.app",
        siteName: "IT Job MM  / Dashboard",
        locale: "en_US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "IT Job MM  / Dashboard",
        card: "summary_large_image",
    },
};


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`w-full min-h-screen flex flex-col${inter.className}`} suppressHydrationWarning>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}
