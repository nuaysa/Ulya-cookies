import { getProducts } from "@/app/libs/products";
import { IProducts } from "@/types/products";
import Image from "next/image";

export default async function AllProducts() {
    const data: IProducts[] = await getProducts()
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="w-[98.9vw] h-[450px] overflow-hidden">
        <Image src="/kue-landscape-HD.jpg" alt="" width={10000} height={100} />
      </div>

      <div className="absolute z-10 stick top-[410px] text-center bg-neutral-200 rounded-full border border-neutral-900 px-10 py-3 text-5xl font-bold">Our Products</div>

      <div className="grid grid-cols-4 gap-10 w-[98.9vw] h-max justify-evenly p-10">
        {data.map((items, idx) => {
          return (
            <div key="idx">
              <div className="bg-gradient-to-t from-neutral-500 to-neutral-300  flex flex-col h-[450px] rounded-xl border border-neutral-400">
                <div className="rounded-xl p-4 overflow-hidden">
                  <Image src={`https:${items.fields.productPic.fields.file.url}`} alt={items.fields.productName} width={240} height={240} />

                  <div className="m-3 text-white text-lg font-semibold">
                    {items.fields.productName}
                    <hr />
                  </div>
                  <p className="text-white pb-2 ">Size Variant :</p>
                  <div className="flex border bg-neutral-300 justify-between border-black p-4 rounded-full">
                    <p>{items.fields.jarSize} </p>
                    <p>|</p>
                    <p>{items.fields.jarSize2}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
