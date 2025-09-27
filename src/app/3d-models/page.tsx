import { getModels } from "@/lib/models";
import type { Model } from "@/types";
import ModelTile from "./components/ModelTile";

export default async function Models() {
    const models: Model[] = await getModels();
    const modelElements = models.map((model) => (
        <ModelTile key={model.id} model={model} />
    ))

    return (
        <div className="w-11/12 max-w-8xl min-h-screen mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {modelElements}
        </div>
    )
}