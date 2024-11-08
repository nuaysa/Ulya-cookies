import Image from "next/image"
import products from "./products";

export default function AllProducts() {
    return(
        <div className="flex flex-col gap-16 items-center">
            <div className="w-[98.9vw] h-[450px] overflow-hidden">
            <Image
            src="/kue-landscape-HD.jpg"
            alt=""
            width={10000}
            height={100}
            />
            </div>

            <div className="absolute z-10 stick top-[410px] text-center bg-neutral-200 rounded-full border border-neutral-900 px-10 py-3 text-5xl font-bold">Our Products</div>

            <div className="grid grid-cols-4 gap-10 w-[98.9vw] h-max justify-evenly p-10">
                 {products.map((items) => {
                return(
                    <div>

                    <div className="bg-gradient-to-t from-neutral-500 to-neutral-300  flex flex-col h-[450px] rounded-xl border border-neutral-400">

                    <div className="rounded-xl p-4 overflow-hidden">
                    <Image
                    src={items.Image}
                    alt={items.productName}
                    width={240}
                    height={240}
                    />

           
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
