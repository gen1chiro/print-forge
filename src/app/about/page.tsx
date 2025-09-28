import Image from "next/image";
import aboutImage from "@/assets/images/about-image.png";

export default function About() {
    return (
        <main className="w-11/12 max-w-7xl h-full mx-auto flex flex-col gap-6 ">
            <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-center justify-center">
                <Image
                    src={aboutImage}
                    alt="about image"
                    className="w-full lg:w-1/2 max-w-2xl"
                />
                <div className="flex flex-col gap-6 md:w-1/2">
                    <p className="uppercase">About printforge</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">Empowering makers worldwide</h1>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </div>
            <hr className="border-gray-500"></hr>
            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:py-10">
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">100k+ Models</h1>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">Active Community</h1>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </div>
                <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold">Free to Use</h1>
                    <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Most models are free to download, with optional premium features for power users.</p>
                </div>
            </div>
            <hr className="border-gray-500"></hr>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold">Our Vision</h1>
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what's possible with 3D printing.</p>
                <p className="text-lg sm:text-xl md:text-2xl xl:text-3xl">Whether you're a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
            </div>
        </main>
    )
}