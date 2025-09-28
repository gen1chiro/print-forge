import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";

export default function Home() {
  return (
    <main className="w-11/12 max-w-7xl h-full mx-auto flex items-center">
        <div className="w-full flex flex-col lg:flex-row justify-center gap-10">
            <div className="flex flex-col gap-10 md:gap-20 items-start justify-center lg:w-1/2">
                <div className="flex flex-col gap-4 items-start justify-center">
                    <p className="hidden lg:block uppercase lg:text-xl">Your go-to platform for 3D printing files</p>
                    <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl">Discover what’s possible with 3D printing</h1>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Join our community of creators and explore a vast library of user-submitted models.</p>
                </div>
                <button className="border-1 px-3 py-2 font-semibold text-lg sm:text-xl md:text-2xl">BROWSE MODELS</button>
            </div>
            <div className="flex items-center lg:w-1/2">
                <Image
                    src={heroImage}
                    alt="hero-image"
                    className="w-full"
                />
            </div>
        </div>
    </main>
  );
}
