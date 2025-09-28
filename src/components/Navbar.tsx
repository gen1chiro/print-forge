import Image from "next/image";
import Link from "next/link";
import printforgeLogo from "@/assets/images/printforge-logo.png";
import printforgeLogoMobile from "@/assets/images/printforge-logo-mobile.png";

const Navbar = () => {

    return (
        <header className="fixed top-0 left-1/2 -translate-x-1/2 w-11/12 max-w-7xl mx-auto py-8 flex items-center justify-between bg-white z-10">
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
                <li className="inline-block px-4 text-xl uppercase"><Link href="/3d-models">3D Models</Link></li>
                <li className="inline-block px-4 text-xl uppercase"><Link href="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Navbar;