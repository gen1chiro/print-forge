import React from "react";
import ModelNavbar from "@/app/3d-models/components/3d-model-navbar";

export default function ModelsLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-11/12 max-w-7xl min-h-screen mx-auto flex">
            <ModelNavbar />
            {children}
        </div>
    )
}
