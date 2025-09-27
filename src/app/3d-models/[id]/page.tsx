import { getModelById } from "@/lib/models";
import aboutImage from "@/assets/images/about-image.png";

export default async function ModelPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const model = await getModelById(Number(id));

    return (
        <div>{model.name}</div>
    );
}