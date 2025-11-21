import { getModels } from "@/lib/models";
import type { Model } from "@/types";
import ModelTile from "./components/model-tile";
import SearchInput from "@/app/3d-models/components/search-input";

export default async function Models({ searchParams }: { searchParams: { query?: string } }) {
    const models: Model[] = await getModels();
    const { query } = searchParams;

    const filteredModels = query
        ? models.filter(model => (
            model.name.toLowerCase().includes(query.toLowerCase()) ||
            model.description.toLowerCase().includes(query.toLowerCase())
        ))
        : models;

    const modelElements = filteredModels.length > 0
        ? filteredModels.map((model) => (
            <ModelTile key={model.id} model={model} />
          ))
        : <p className="col-span-full text-center text-gray-500">No models found.</p>;

    return (
        <div className="w-5/6 flex flex-col gap-10 items-center justify-start">
            <div className='w-full flex justify-between items-center'>
                <h1 className="text-4xl font-bold">3D Models</h1>
                <SearchInput />
            </div>
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {modelElements}
            </div>
        </div>
    )
}