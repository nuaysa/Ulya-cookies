"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar () {
    const [isScrolled, setIsScrolled] = useState(false); // Default false, karena biasanya awalnya belum di-scroll

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`flex justify-between items-center w-[100vw] h-[69px] fixed z-40 text-neutral-100 px-7 py-3 transition-colors duration-300 ${
            isScrolled ? "bg-neutral-700 shadow-lg" : "bg-transparent"
        }`}>
        <div className="flex flex-row gap-5 items-center">
            <Link href="/">
            <Image
            alt="brand" 
            src="/logo.jpg"
            width={50}
            height={50}
            className="border rounded-full"
            />
            </Link>
            <Link href="/" className="font-extrabold text-[30px]">Ulya cookies</Link>
        </div>

        <div className="flex gap-10 font-bold">
        <Link href='/' className="hover:text-neutral-300">Home</Link>
        <Link href='/about' className="hover:text-neutral-300">About</Link>
        <Link href='/team' className="hover:text-neutral-300">Team</Link>
        <Link href='/products' className="hover:text-neutral-300">Products</Link>
        </div>

        </div>
    )
}