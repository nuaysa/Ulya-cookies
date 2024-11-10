import Image from "next/image";

export default function about() {
    return(
        <div className="flex flex-col justify-center items-center h-[1350px] lg:h-screen w-[98vw] bg-neutral-200">
            <div className="w-screen h-screen fixed hidden lg:block">
                <Image
                src="/kue-1-2.png"
                alt="background"
                width={5000}
                height={10000}
                />
            </div>
            <div className="w-screen h-screen sticky top-0 bottom-0 block lg:hidden">
                <Image
                src="/menu/toples-3lagi.jpg"
                alt="background"
                layout="fill"
                objectFit="cover"
                />
            </div>

            <h1 className="text-black mb-[1130px] lg:mb-[500px]  lg:mt-1 z-30 absolute font-bold bg-neutral-200 py-3 px-10 rounded-full border border-neutral-500 text-3xl lg:text-5xl ">About Us</h1>

            <div className="flex items-center h-[1200px] lg:h-[540px] rounded-2xl backdrop-blur-sm bg-black/40 p-4 w-72 lg:w-[1200px] lg:p-16 mx-96 lg:mx-62 mt-16 z-20 absolute">
                
            <p className=" text-neutral-100 lg:my-0 my-[100px] leading-6 lg:leading-9">
            A Journey from Passion to Purpose

Our humble beginnings trace back to the uncertain times of the COVID-19 pandemic. Like many others during lockdown, our founder found herself looking for a creative outlet to fill the long days at home. Having always loved baking, she decided to spend her extra time experimenting with various recipes, trying out unique flavors, and perfecting family favorites. What started as a simple hobby soon became something far more meaningful.
<br />
<br />
<span>

As the aroma of fresh cookies and traditional treats filled her home, friends and family took notice. Requests for her cookies began pouring in, and soon enough, orders were coming from friends of friends. With each batch, our founder poured her heart into making every piece a little moment of joy for those facing the same challenges around her. Realizing the happiness her treats brought to others, she decided to turn this passion project into a full-fledged business, dedicating herself to creating delicious, homemade treats that would bring smiles to even more people.

</span>
<br />
<br />
<span>

Today, our company prides itself on delivering that same warmth and quality in every jar. Each cookie is still crafted with the same love and care that inspired us in the beginning, aiming to bring a taste of comfort to our customers’ homes. From our kitchen to yours, we invite you to share in our journey—a story of resilience, creativity, and a touch of sweetness in challenging times.
</span>
</p>
 
            </div>  
        </div>
    )
}