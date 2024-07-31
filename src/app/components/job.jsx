"use client"

import "../styling/homepage.css"
import Link from "next/link"

export default function Job({ title, images }) {
    return (
        <div>
            <h1>{title}</h1>
            <div data-carousel="slide">
                <div>
                    {images?.map((imageUrl, index) => (
                        <div data-carousel-item>
                            <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
}
