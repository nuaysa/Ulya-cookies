import Image from "next/image";

export default function Founder() {
  return(
        <div className="h-full bg-neutral-300 p-3">
        <div className="flex justify-center items-center text-neutral-800">

          <h1 className="mt-10 lg:mt-0 text-center text-5xl font-bold">Get to know our Founder !</h1>
        </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-20 m-6 p-7">
            <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-neutral-500 rounded-full overflow-hidden ">
            <Image
            src="/inti/founder.jpg"
            alt="Founder"
            width={500}
            height={600}
            />
            </div>
            <div className="backdrop-blur-sm bg-neutral-400/40 rounded-xl flex-1 w-[400px] lg:w-[600px] text-base lg:text-lg leading-8 lg:leading-9 p-10">
              <span className="font-semibold text-xl">
              Introducing the Founder of Ulya Cookies
              </span>
              <hr className="border border-neutral-900"/>

Ummu Ulya is the visionary founder of Ulya Cookies, a company renowned for its artisanal approach to premium homemade cookies. With a passion for quality ingredients and unique flavors, Ummu Ulya has dedicated their career to elevating the cookie-making craft, delivering exceptional quality and taste in every bite. 

Driven by an entrepreneurial spirit, Ummu Ulya continuously seeks to push the boundaries of traditional baking, curating flavors that resonate with customers while maintaining the warmth and authenticity of homemade treats. Their dedication has made Ulya Cookies a go-to choice for those who appreciate both quality and creativity in every product.</div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 lg:m-6 p-7">
            <div className="w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] border border-neutral-500 rounded-full overflow-hidden flex lg:hidden">
            <Image
            src="/inti/partner.png"
            alt="partner"
            width={500}
            height={500}
            
            />
            </div>
          <div className="backdrop-blur-sm bg-neutral-400/40 rounded-xl flex-1 w-[400px] lg:w-[600px] text-base lg:text-lg leading-8 lg:leading-9 p-10 mx-10 lg:mx-0">
              <span className="font-semibold text-xl">
              Introducing the Co-Founder of Ulya Cookies
              </span>
              <hr className="border border-neutral-900"/>
              Derra N Ulya, the eldest daughter of Ummu Ulya, has been deeply involved in the creation of Ulya Cookies since its inception. Working alongside her mother, she has contributed her skills and passion to crafting each batch, ensuring the unique homemade quality that defines the brand. Her commitment has been instrumental in building Ulya Cookies into the beloved brand it is today.</div>
              <div className="w-[500px] h-[500px] border border-neutral-500 rounded-full overflow-hidden hidden lg:flex">
            <Image
            src="/inti/partner.png"
            alt="partner"
            width={500}
            height={500}
            
            />
            </div>
        </div>
       </div>
    )
}