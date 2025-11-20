import Link from "next/link";
import { getAllCategories } from "@/lib/categories";


export default function ModelNavbar() {
    const categories = getAllCategories();
    const categoryLinks = categories.map((category, index) => (
        <li key={index}>
            <Link href={`/3d-models/categories/${category.slug}`}>{category.displayName}</Link>
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