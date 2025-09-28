import { getModelById } from "@/lib/models";
import aboutImage from "@/assets/images/about-image.png";
import Image from "next/image";
import Link from "next/link";

export default async function ModelPage({ params }: { params: { id: string } }) {
    const { id } = params;
    const model = await getModelById(Number(id));
    const { name, description, likes, category } = model;

    return (
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
            <Image src={aboutImage} alt="model image" className="w-full md:w-1/2" />
            <div className="relative flex flex-col justify-center items-start gap-6">
                <Link href={"/3d-models"} className="hidden md:block absolute top-0 left-0 uppercase">back to overview</Link>
                <p>{likes}</p>
                <h1 className="font-bold text-4xl">{name}</h1>
                <p className="border-1 rounded-full px-2 py-1 inline-block">{category}</p>
                <p>{description}</p>
            </div>
        </div>
    );
}