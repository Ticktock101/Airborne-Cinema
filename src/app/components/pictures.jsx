"use client"

import Link from "next/link";


export default function Pictures({image, title}) {
    return (
        <div>
            <Link href={`/${title.toLowerCase()}`}>{title}</Link>
            <img src={image}></img>
        </div>
    )
}