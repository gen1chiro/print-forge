import { getDisplayNameFromSlug } from "@/lib/categories";
import { getModelsByCategory } from "@/lib/models";
import ModelTile from "../../components/ModelTile";


export default async function CategoryPage({params}: {params: {categoryName: string}}) {
    const { categoryName } = params;
    const displayName = getDisplayNameFromSlug(categoryName);
    const models = await getModelsByCategory(categoryName);
    console.log(models)

    const modelElements = models.map((model) => (
        <ModelTile key={model.id} model={model} />
    ));


    return (
        <div className="w-5/6 flex flex-col gap-10 items-start justify-center">
            <h1 className="text-4xl font-bold">3D Models</h1>
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {modelElements}
            </div>
        </div>
    )
}