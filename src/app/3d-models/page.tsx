import { getModels } from "@/lib/models";
import type { Model } from "@/types";
import ModelTile from "./components/ModelTile";

export default async function Models() {
    const models: Model[] = await getModels();
    const modelElements = models.map((model) => (
        <ModelTile key={model.id} model={model} />
    ))

    return (
        <div className="w-11/12 max-w-7xl min-h-screen mx-auto flex flex-col gap-10 items-start justify-center">
            <h1 className="text-4xl font-bold">3D Models</h1>
            <div className="w-full grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {modelElements}
            </div>
        </div>
    )
}