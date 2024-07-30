"use client"

import "../styling/homepage.css"

export default function Job({image, title}) {
    return (
        <div className="flex-column justify-center">
            <img src={image}></img>
            <a href="#" >{title}</a>
        </div>
    )
    
}