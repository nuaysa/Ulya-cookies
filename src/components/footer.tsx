import Link from "next/link";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
    return (
        <div className="flex flex-col relative bottom-0 w-screen lg:w-[98.9vw] z-40 bg-neutral-400 lg:h-60 justify-between border border-t-neutral-950 border-t-dashed ">
            <div>
            <div className="flex justify-center lg:gap-32 gap-5 lg:pt-7 pt-4 leading-9">
                <div className="flex flex-col justify-start">
                    <p className="font-bold">Explore</p>
                    <Link className="text-neutral-700" href="/" >Home</Link>
                    <Link className="text-neutral-700" href="/about">About Us</Link>
                    <Link className="text-neutral-700" href="/team">Our Team</Link>
                    <Link className="text-neutral-700" href="/products">Our Products</Link>
                </div>
                <div className="flex flex-col justify-start items-center gap-3">
                    <h1 className="font-bold">Contact Us</h1>
                    <Link href="https://api.whatsapp.com/send/?phone=082123293035&text&type=phone_number&app_absent=0" className="text-neutral-700">
                    <BsWhatsapp aria-label="button"/>
                    </Link>
                    <Link href="https://www.instagram.com/ulya_cookies/"  className="text-neutral-700">
                    <BsInstagram aria-label="button"/>
                    </Link>
                </div>
            </div>
            </div>
                <p className="text-center text-xs sm:text-xs mt-2 sm:mt-2 md:text-sm text-neutral-700">This website was developed by Allysa Naveeda for Ulya Cookies. © 2024 Ulya Cookies. All rights reserved</p>
        </div>
  );
}
