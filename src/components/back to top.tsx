import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
        return 
    <Link href="#" onClick={scrollToTop}>
            <div className="bg-white/20 border border-black flex justify-end items-end m-5 rounded-full">
            <FaArrowUp />
        </div>
            </Link>
    
}

export default BackToTopButton