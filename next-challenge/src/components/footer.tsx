import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex flex-col relative bg-neutral-400 h-60 justify-between border border-t-neutral-950 border-dashed ">
            <div>
            <div className="flex justify-center gap-32 pt-7 leading-9">
                <div className="flex flex-col justify-start">
                    <p className="font-bold">Explore</p>
                    <Link className="text-neutral-700" href="/" >Home</Link>
                    <Link className="text-neutral-700" href="/about">About Us</Link>
                    <Link className="text-neutral-700" href="/team">Our Team</Link>
                    <Link className="text-neutral-700" href="/products">Our Products</Link>
                </div>
                <div className="flex flex-col justify-start items-center gap-4">
                    <h1 className="font-bold">Contact Us</h1>
                    <Link href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F62895617498030%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabuM7RFcIbEvQ2eEkBC149scmTzMxnZqr_nAhuQV-YBASH7BF0WbpKvFaI_aem_maqP7lfnnKVFws7WUst-jA&e=AT1pGqYa7WK7LbADElxxWAheYamaVS5PHVaw7cWYxa4ZXBw5FYE1bR50LiRB_axZcjMJspsNHcoJQiZh5UOBatAlyO4Kkko-CTXJ6qw" className="text-neutral-700">
                        <BsWhatsapp />
                    </Link>
                    <Link href="https://www.instagram.com/ulya_cookies/"  className="text-neutral-700">
                        <FaInstagram />
                    </Link>
                </div>
            </div>
            </div>
                <p className="text-center text-s text-neutral-700">This website was developed by Allysa Naveeda for Ulya Cookies. © 2024 Ulya Cookies. All rights reserved</p>
        </div>
  );
}
