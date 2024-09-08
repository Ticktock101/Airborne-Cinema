import Link from "next/link";


export default function Footer() {
    return (
        <div className="h-1/6 flex bg-gray-500 text-white place-content-around items-center text-xl"> 
            <div className="flex-col">
                <Link href={"#"}><p>Homepage</p></Link>
                <Link href={"/agriculture"}><p>Agriculture</p></Link>
                <Link href={"/civil"}><p>Civil</p></Link>
                <Link href={"/construction"}><p>Construction</p></Link>

            </div>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <Link href={"#"}><p>Contact us</p></Link>
                    <Link href={"#"}><p>Subscribe</p></Link>
                </div>
                <div className="mt-2">
                    <p>Copyright © 2024 Airborne Cinema - All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}