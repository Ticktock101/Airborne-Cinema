"use client"

import Link from "next/link";

export default function Pictures({image, title}) {
    return (
        <div className="flex flex-col justify-end items-center h-3/4 bg-cover bg-center rounded-xl w-1/3 m-2 "
        style={{ backgroundImage: `url(${image})` }}>
            {/* taken out because it pages weren't deploying correctly in vercel and I don't wanna deal with it */}
            {/* <Link href={`/${title.toLowerCase()}`} className="text-5xl text-white text-bold p-3">{title}</Link> */}
            <Link href="#" className="text-5xl text-white text-bold p-3">{title}</Link>
        </div>
    )
}