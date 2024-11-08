import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

export default function Order(){
    return (
        <div className="bg-gradient-to-tr from-neutral-800 to-neutral-600 m-20 rounded-xl text-white font-bold h-[300px] p-5 text-center flex flex-col">
            <h1 className=" text-4xl">Do you want to order ?</h1>
            <h1 className="text-3xl">Contact Us !</h1>
            <div className="text-8xl pt-10 flex justify-center gap-20">
                    <Link href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F62895617498030%3Ffbclid%3DPAZXh0bgNhZW0CMTEAAabuM7RFcIbEvQ2eEkBC149scmTzMxnZqr_nAhuQV-YBASH7BF0WbpKvFaI_aem_maqP7lfnnKVFws7WUst-jA&e=AT1pGqYa7WK7LbADElxxWAheYamaVS5PHVaw7cWYxa4ZXBw5FYE1bR50LiRB_axZcjMJspsNHcoJQiZh5UOBatAlyO4Kkko-CTXJ6qw">
                        <BsWhatsapp />
                    </Link>
                    <Link href="https://www.instagram.com/ulya_cookies/">
                        <FaInstagram />
                    </Link>
            </div>
        </div>
    )
}