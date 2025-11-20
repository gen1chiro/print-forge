import { getDisplayNameFromSlug } from "@/lib/categories";


export default async function CategoryPage({params}: {params: {categoryName: string}}) {
    const { categoryName } = params;
    const displayName = getDisplayNameFromSlug(categoryName);

    return (
        <h1>{displayName}</h1>
    )
}