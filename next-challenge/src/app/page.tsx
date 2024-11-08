import Founder from "@/components/Founder";
import ProductsDisplay from "@/components/productsDisplay";
import Testimonial from "@/components/testimoni";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="relative flex max-w-screen max-h-screen">

          {/* ini hero */}

          <div>
            <Image alt="foto" src="/hero.jpg" width={700} height={100} objectFit="relative" className="w-[45vw] h-[100vh]"/>
          </div>
          <div className="bg-neutral-800 w-[55vw] h-[100vh]"></div>
          <div className="absolute inset-0 flex  items-center space-x-10 left-[39vw]">
            <div>
              <Image alt="logo" src="/logo.jpg" width={500} height={500} objectFit="cover" className="w-[200px] h-[200px] border border-zinc-600 rounded-full " />
            </div>
            <div>
              <div className="text-white">
                <h1 className="font-extrabold text-[40px]">Ulya Cookies </h1>
                <p className="mt-2 mb-5 font-abold text-[30px]">Flavor You'll Always Remember</p>
                <div className="w-[30vw] h-[35vh]">
                  <p className="mb-6">
                    Ulya Cookies is a local bakery dedicated to crafting delicious and high-quality cookies for every occasion, Whether it’s for a celebration, a gift, or a treat for yourself, Ulya Cookies aims to bring joy and sweetness to
                    your everyday moments.
                    <br />
                  </p>
                  <hr />
                  <br />
                  <p className="mb-6">We are committed to fostering a sense of community and celebrating special moments, one cookie at a time.</p>
                </div>
                <Link href="/about" className="m-2 border border-white p-4 rounded-full hover:bg-gray-700">
                  about us
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ini sekilas produk */}

        <div className="bg-neutral-300 h-[700px] py-7 p-6">
          <div className="flex justify-between gap-10 bg-gradient-to-r h-[600px] from-neutral-800 to-neutral-600 p-10 rounded-lg">
            <div className="flex flex-col text-white text-start justify-between text-xl p-4 w-1/2">
              <h1 className="text-center font-extrabold text-5xl bg-neutral-700 rounded-sm p-6">Our Products</h1>
              <div>

              <p className="leading-9">
                Celebrate special moments with Ulya Cookies! Enjoy the delicious, high-quality, and perfectly crunchy cookies in every jar. Available in a variety of jar's size, they’re perfect for sharing with family or gifting to
                loved ones. Order now and experience the premium taste of Ulya Cookies!
              </p>
              <br />
              <Link href="/products" className="text-white border border-white py-4 px-6 rounded-full bg-neutral-800 hover:bg-neutral-700">
                Show More Products
              </Link>
              </div>
            </div>
            <ProductsDisplay />
          </div>
        </div>

        {/* ini founder */}
        <Founder/>
    </>
  );
}
