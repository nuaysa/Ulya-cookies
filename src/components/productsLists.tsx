import { getProducts } from "@/libs/product"
import { IProducts } from "@/types/products";
import Image from "next/image"

export default async function AllProducts() {
    const data: IProducts[] = await getProducts();
    console.log(data);
    
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 w-[98.9vw] h-max justify-evenly p-10">
            {data.map((items) =>( 
                    <div key={items.fields.productName}>

                    <div className="bg-gradient-to-t from-neutral-500 to-neutral-300  flex flex-col max-h-[450px] rounded-xl border border-neutral-400">

                    <div className="rounded-xl  p-4 overflow-hidden min-w-[100px] min-h-[400px]">
                    <div className="max-w-full max-h-[180px] overflow-hidden rounded-xl">
                    <Image
                    src={`https:${items.fields.productPic.fields.file.url}`}
                    alt={items.fields.productName}
                    width={400}
                    height={200}
                    className="rounded-xl max-h-[400px]"
                    />
                    </div>
           
                    <div className="m-3 text-white text-lg font-semibold">{items.fields.productName}
                        <hr />
                    </div>
                        <p className="text-white pb-2 ">Size Variant :</p>
                    <div className="flex border bg-neutral-300 justify-between border-black p-4 rounded-full">
                        <p>{items.fields.jarSize} </p>
                        <p>|</p>
                        <p> {items.fields.jarSize2}</p>
                    </div>
                    </div>
                    </div>
            </div>
                 ))}
            </div>
            </div>
    )}
