import Founder from "@/components/Founder";
import ProductsDisplay from "@/components/productsDisplay";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <div className="relative flex flex-col max-w-screen max-h-screen sm:flex-col lg:flex-row">

          {/* ini hero */}

          <div className="h-[920px]">
            <Image 
            alt="foto" 
            src="/menu/hampers-2.jpg" 
            width={1000}
            height={1000}
            objectFit="relative" 
            className="lg:w-[45vw] h-[920px] lg:h-[100vh] "/>
          </div>
          <div className="bg-neutral-800 w-[55vw] h-[100vh] hidden lg:flex"></div>
          <div className="z-20 inset-0 flex flex-col absolute lg:flex-row justify-center gap-5 items-center space-x-2 lg:space-x-5 lg:left-[22vw]">
            
              <Image alt="logo" src="/logo.jpg" width={500} height={500} objectFit="cover" className="w-[100px] h-[100px] lg:mt-0 lg:w-[200px] md:h-[200px] border border-zinc-600 rounded-full " />
              <div className="text-neutral-900  lg:text-white">
                <div className="backdrop-blur-sm bg-neutral-400/20 p-2 rounded-xl mb-5 m-1 lg:m-0 mx-0 lg:mb-0 px-5 lg:px-0 lg:bg-transparent lg:backdrop-blur-0 border border-neutral-200 lg:border-hidden">
                <h1 className="font-extrabold text-[30px] lg:text-[40px]">Ulya Cookies </h1>
                <p className="mt-2 mb-5 font-abold text-[20px] lg:text-[30px]">Flavor You&apos;ll Always Remember</p>
                <div className="w-[50vw] h-full lg:w-[30vw] lg:h-[35vh]">
                  <p className="mb-6">
                    Ulya Cookies is a local bakery dedicated to crafting delicious and high-quality cookies for every occasion, Whether it&apos;s for a celebration, a gift, or a treat for yourself, Ulya Cookies aims to bring joy and sweetness to
                  </p>
                  <hr />
                  <br />
                  <p className="mb-6">We are committed to fostering a sense of community and celebrating special moments, one cookie at a time.</p>
                </div>
                </div>
                <Link href="/about" className="m-5 bg-neutral-400/30 lg:bg-transparent lg:m-2 border border-white p-4 rounded-full hover:bg-gray-700">
                  about us
                </Link>
              </div>
            </div>
          </div>

        {/* ini sekilas produk */}

        <div className="pt-20 lg:pt-10 bg-neutral-300 lg:h-[700px] lg:py-7 p-6">
          <div className="flex flex-col lg:flex-row lg:justify-between justify-evenly gap-10 bg-gradient-to-r h-[850px] lg:h-[600px] from-neutral-800 to-neutral-600  lg:px-9 p-10 rounded-lg">
              <div className="flex justify-center lg:hidden">
            <ProductsDisplay />
              </div>
            <div className="flex flex-col text-white text-center lg:text-start lg:justify-between text-sm lg:text-xl p-4 lg:w-1/2">
              <h1 className="text-center font-extrabold text-3xl lg:text-5xl bg-neutral-700 rounded-sm p-3 lg:p-6">Our Products</h1>
              <div>

              <p className="leading-9">
                Celebrate special moments with Ulya Cookies! Enjoy the delicious, high-quality, and perfectly crunchy cookies in every jar. Available in a variety of jar&apos;s size, they’re perfect for sharing with family or gifting to
                loved ones. Order now and experience the premium taste of Ulya Cookies!
              </p>
              <br />
              <Link href="/products" className="text-white border border-white py-4 px-6 rounded-full bg-neutral-800 hover:bg-neutral-700">
                Show More Products
              </Link>
              </div>
            </div>
            <div className="hidden lg:flex">
            <ProductsDisplay />
            </div>
          </div>
        </div>

        {/* ini founder */}
        <Founder/>
    </>
  );
}
