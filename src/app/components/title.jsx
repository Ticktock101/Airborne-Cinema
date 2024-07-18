"use client"

import "../styling/homepage.css"

export default function Title() {
    return (
        <div
            className="h-screen w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/homepageDroneImage.jpg')" }}>
            <h1 className="">
                Airborne Cinema
            </h1>
        </div>

    )
}