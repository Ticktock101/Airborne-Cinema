"use client"

import "../styling/homepage.css"

export default function Title() {
    return (
        <div
            className=" h-5/6 w-full bg-cover bg-center  flex items-end "
            style={{ backgroundImage: "url('/homepageDroneImage.jpg')" }}>
            <div className="absolute h-full w-full bg-black bg-opacity-50"></div>
            <div className="h-5/6 w-full flex flex-col items-center z-10 place-content-around">
                <h1 className="flex justify-center w-full text-7xl text-white">
                    <b>
                        AIRBORNE CINEMA
                    </b>
                </h1>
                <h2 className="flex text-white text-5xl">
                    <b>
                        Elevate Your Vision
                    </b>
                </h2>
            </div>
        </div>

    )
}