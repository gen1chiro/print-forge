import Image from "next/image";
import Link from "next/link";
import aboutImage from "@/assets/images/about-image.png";
import type { ModelTileProps } from "@/types/components";

const ModelTile = ({model}: ModelTileProps) => {
    const {id, name, description, likes, category} = model;

    return (
        <Link
            href={`/3d-models/${id}`}
            className="border-1 flex flex-col justify-center items-start rounded-lg overflow-hidden gap-4">
            <Image
                src={aboutImage}
                alt="model image"
                className="w-full"
            />
            <div className="w-full flex flex-col items-start gap-4 p-4">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{description}</p>
                <p className="border-1 rounded-full px-2 py-1">{category}</p>
                <p>{likes}</p>
            </div>
        </Link>
    );
}

export default ModelTile;