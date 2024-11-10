import Image from "next/image"

export default function Testimonial () {
    return (
        <div className="flex flex-col p-5">
            <h1 className="text-3xl lg:text-4xl my-5 font-bold">What people think about our products ?</h1>
        <div className="flex justify-center">
    <div className="flex  flex-col lg:flex-row  items-center">
               {reviews.map((items,idx) =>
                <div className="flex justify-center" key={idx}>
                        <div className="absolute flex w-[100px] h-[100px] border border-black bg-black rounded-full justify-center items-center">
                        <Image
                        src={items.image}
                        alt="profile"
                        width={100}
                        height={100}
                        className="border rounded-full"/>
                        </div>
                    <div className="flex flex-col pt-16 p-5 bg-neutral-300 w-[280px] h-[380px] m-10 rounded-xl justify-start items-center border border-black">
                        <div className="font-semibold text-[20px]">{items.name}
                        <hr className="border border-black"/>
                        <h1>🍪🍪🍪🍪🍪🍪🍪</h1>
                        </div>
                        <div className="pt-3 place-items-center leading-8 font-light">{items.review}</div>
                    </div>
                </div>
                    )
                }
                </div>
        </div>
        </div>
    )
}

interface Review {
    name: string;
    review: string;
    image: string
  }

const reviews: Review[] = [
    {
    name: "Chelsea",
    review:"Variasi dan kualitas kue sangat memuaskan, terutama kue kering yang renyah. Semua tamu saya mengagumi kue ini! Terima kasih telah membuat lebaran kami semakin spesial",
    image: "/logo.jpg"
    },
    {
    name: "Heni",
    review:"Enak, ga enek gitu loh si kuenya kan biasanya kue kue kering mah enek gula, ini mah engga, terus rasa coklatnya juga bikin nagih.",
    image: "/logo.jpg"
    },
    {
    name: "Sahara",
    review:"Kue lebaran dari Ulya Cookies sangat lezat! Cokelatnya luar biasa, pasti akan pesan lagi!",
    image: "/logo.jpg"
    },
    {
    name: "Hasna",
    review:"SEMUANYA ENAK, tekstur kuenya lembut. Kalau ada yang coklat, manis tapi gak bikin giung",
    image: "/logo.jpg"
    }
]