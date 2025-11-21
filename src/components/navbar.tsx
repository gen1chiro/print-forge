'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import printforgeLogo from "@/assets/images/printforge-logo.png";
import printforgeLogoMobile from "@/assets/images/printforge-logo-mobile.png";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 w-11/12 max-w-7xl mx-auto flex items-center justify-between bg-white z-10 py-8">
            <Link href="/">
                <Image
                    src={printforgeLogo}
                    alt="logo"
                    className="hidden md:block"/>
                <Image
                    src={printforgeLogoMobile}
                    alt="logo"
                    className="md:hidden"
                />
            </Link>
            <ul>
                <li className="inline-block px-4 text-xl uppercase">
                    <Link
                        href="/3d-models"
                        className={pathname.startsWith('/3d-models') ? 'text-orange-300 underline' : ''}
                    >
                        3D Models
                    </Link>
                </li>
                <li className="inline-block px-4 text-xl uppercase">
                    <Link
                        href="/about"
                        className={pathname.startsWith('/about') ? 'text-orange-300 underline' : ''}
                    >
                        About
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Navbar;