import Team from "@/components/fetching";
import Image from "next/image";

export default async function teams() {
 
  return (
    <div className="flex max-w-screen h-[1500px] lg:max-h-screen">
      <div className="hidden lg:flex items-center justify-end bg-neutral-700 w-1/2 h-screen text-white px-8">
        <h1 className="font-bold text-5xl fixed mr-20">Our Team</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-7 lg:gap-5 h-full lg:h-screen bg-neutral-500 lg:bg-neutral-400 items-center justify-evenly w-[1000px] py-10">
      <div className="block lg:hidden mt-24 text-3xl font-bold bg-neutral-200 py-3 px-5 border border-black rounded-full">Our Team</div>
        <div className="flex justify-center flex-col h-full lg:h-[80vh] w-[360px] bg-neutral-300 items-center rounded-xl px-1 py-5">
          <h1 className="font-bold text-2xl text-center mb-2">Baker</h1>
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
             <Team/>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col h-full lg:h-[80vh] w-[360px] bg-neutral-300 items-center rounded-xl px-1 py-4">
          <h1 className="font-bold text-2xl text-center mb-2">Staff</h1>
          <div className="flex gap-4">
          <Team/>
          </div>
        </div>
      </div>
    </div>
  );
}
