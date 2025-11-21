import { getDisplayNameFromSlug } from "@/lib/categories";
import { getModelsByCategory } from "@/lib/models";
import ModelTile from "../../components/model-tile";
import SearchInput from "@/app/3d-models/components/search-input";


export default async function CategoryPage({params}: {params: {categoryName: string}}) {
    const { categoryName } = params;
    const displayName = getDisplayNameFromSlug(categoryName);
    const models = await getModelsByCategory(categoryName);

    const modelElements = models.map((model) => (
        <ModelTile key={model.id} model={model} />
    ));

    return (
        <div className="w-5/6 flex flex-col gap-10 items-center justify-start">
            <div className="w-full flex items-center justify-between">
                <h1 className="text-4xl font-bold">{displayName}</h1>
                <SearchInput />
            </div>
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {modelElements}
            </div>
        </div>
    )
}