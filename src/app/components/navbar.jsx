"use client"

import { useState, useRef } from "react";
import {FaBars} from "react-icons/fa";
import {MdClose} from "react-icons/md"
import "../styling/homepage.css"

export default function Navbar() {

    const [isClicked, setIsClicked] = useState(false);
    const navRef = useRef();

    const showNavbar = () => {
        let timer = 0;

        if (!isClicked)
            timer = 100
        else
            timer = 500

        navRef.current.classList.toggle("responsive_nav");
        setTimeout(() => {
            setIsClicked(!isClicked);
        }, timer);
    }

    return (
        <header className="h-12 w-12 absolute z-50">
            <nav ref={navRef} className=" fixed top-0 left-0 w-screen h-screen rounded-bl-full flex flex-col transform translate-x-full -translate-y-full transition-transform duration-1000 ease-in-out">
                <button className="fixed top-8 right-10 self-end w-16 h-16 rounded-full flex justify-center " onClick={showNavbar}>
                    <MdClose className="self-center"/>
                </button>
                <div className="justify-between self-center">
                    <a href="/#">Agriculture</a>
                    <a href="/#">Civil</a>
                    <a href="/#">Construction</a>
                    <a href="/#">Contact</a>
                </div>
                
            </nav>
            { !isClicked && (
                <button onClick={showNavbar} className="fixed top-8 right-10 ml-auto rounded-full w-16 h-16 flex justify-center border-6">
                    <FaBars className="self-center"/>
                </button>
            )}
        </header>
    )
}