import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Order(){
    return (
        <div className="bg-gradient-to-tr from-neutral-800 to-neutral-600 m-20 rounded-xl text-white font-bold min-h-[200px] min-w-[200px] p-5 text-center flex flex-col">
            <h1 className=" text-2xl lg:text-4xl">Do you want to order ?</h1>
            <h1 className="text-xl lg:text-3xl">Contact Us !</h1>
            <div className="text-4xl lg:text-8xl pt-10 flex justify-center text-center gap-10 lg:gap-20 mb-0 lg:mb-16">
                    <Link href="https://api.whatsapp.com/send/?phone=6282123293035&text&type=phone_number&app_absent=0">
                        <BsWhatsapp />
                    </Link>
                    <p>|</p>
                    <Link href="https://www.instagram.com/ulya_cookies/">
                        <FaInstagram />
                    </Link>
            </div>
        </div>
    )
}