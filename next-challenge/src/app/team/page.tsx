import Image from "next/image";
import { ITeam } from "@/types/team";

async function getData(): Promise<ITeam[]> {
    const res = await fetch("https://randomuser.me/api/?results=5", {
      next: { revalidate: 0 },
      // next: { tags: ['results'] },
      // cache: 'no-cache'
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  }
  
export default async function teams() {
    const data = await getData();
    
  return (
    <div className="flex max-w-screen max-h-screen">
      <div className="flex items-center justify-end bg-neutral-700 w-1/2 h-screen text-white px-8">
        <h1 className="font-bold text-5xl fixed mr-20">Our Team</h1>
      </div>
      <div className="flex gap-5 bg-neutral-400 items-center justify-evenly h-screen w-[1000px]">
        <div className="flex flex-col overflow-y-auto h-[80vh] w-[350px] bg-neutral-300 rounded-xl p-5">
          <h1 className="font-bold text-2xl text-center mb-2">Baker</h1>
          <div className="flex gap-4">
            <div className="bg-white w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image src={""} alt={""} width={100} height={100} />
            </div>
            <div className="flex flex-col items-center justify-center">
              {data.map((item) => {
                return(
                  <div className="flex items-center">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                    <Image
                    src={item.image}
                    alt="team"
                    width={100}
                    height={100}
                    />
                    </div>
                    <div className="flex flex-col">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    </div>
                  </div>
                  )
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-y-auto h-[80vh] w-[350px] bg-neutral-300 rounded-xl p-5">
          <h1 className="font-bold text-2xl text-center mb-2">Staff</h1>
          <div className="flex gap-4">
            <div className="bg-white w-[80px] h-[80px] rounded-full overflow-hidden">
              <Image src={""} alt={""} width={100} height={100} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p>Nama</p>
              <p className="text-xs text-neutral-500">Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
