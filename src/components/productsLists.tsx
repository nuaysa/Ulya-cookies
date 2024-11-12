import Image from "next/image"
import products from "./products";

export default function AllProducts() {
    return(
        <div className="flex flex-col gap-16 items-center">
            <div className="w-[98.9vw] h-[450px] overflow-hidden hidden lg:block">
            <Image
            src="/menu/toples-landscape.jpg"
            alt=""
            width={10000}
            height={90}
            className="bottom-5"
            />
            </div>
            <div className="w-[98.9vw] h-[450px] overflow-hidden block lg:hidden">
            <Image
            src="/menu/hampers.jpg"
            alt=""
            width={10000}
            height={90}
            className="bottom-5"
            />
            </div>

            <div className="absolute z-10 stick top-[410px] mt-[15px] sm:mt-[20px] lg:mt-0 text-center bg-neutral-200 rounded-full border border-neutral-900 px-10 py-2 sm:py-2 lg:py-4 text-3xl sm:text-3xl mx-0 lg:text-5xl font-bold">Our Products</div>

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-10 w-[98.9vw] h-max justify-evenly p-10">
                 {products.map((items,idx) => {
                return(
                    <div key={idx}>

                    <div className="bg-gradient-to-t from-neutral-500 to-neutral-300  flex flex-col max-h-[450px] rounded-xl border border-neutral-400">

                    <div className="rounded-xl p-4 overflow-hidden">
                    <div className="max-w-full max-h-[200px] overflow-hidden rounded-xl">
                    <Image
                    src={items.Image}
                    alt={items.productName}
                    width={400}
                    height={400}
                    className="rounded-xl"
                    />
                    </div>
           
                    <div className="m-3 text-white text-lg font-semibold">{items.productName}
                        <hr />
                    </div>
                        <p className="text-white pb-2 ">Size Variant :</p>
                    <div className="flex border bg-neutral-300 justify-between border-black p-4 rounded-full">
                        <p>{items.size[0]} </p>
                        <p>|</p>
                        <p> {items.size[1]}</p>
                    </div>
                    </div>
                    </div>
            </div>
                 )})}
            </div>
            </div>
    )}
