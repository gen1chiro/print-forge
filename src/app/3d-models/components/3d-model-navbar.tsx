'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllCategories } from "@/lib/categories";


export default function ModelNavbar() {
    const pathname = usePathname();
    const categories = getAllCategories();
    console.log(pathname);

    const categoryLinks = categories.map((category, index) => (
        <li key={index}>
            <Link
                href={`/3d-models/categories/${category.slug}`}
                className={`hover:text-orange-300 ${pathname === `/3d-models/categories/${category.slug}` ? 'text-orange-300 underline' : 'text-black'}`}
            >
                {category.displayName}
            </Link>
        </li>
    ));

    return (
        <nav className='sticky top-1/2 -translate-y-1/2 w-1/6 h-full flex jusitfy-end items-center'>
            <ul className="flex flex-col gap-4">
                {categoryLinks}
            </ul>
        </nav>
    )
}