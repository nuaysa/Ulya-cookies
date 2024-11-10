import Image from "next/image";

interface ITeam {
  username: string;
  email: string;
  image: string;
}



async function getData(): Promise<ITeam[]> {
  const res = await fetch("https://randomuser.me/api/?results=5", {
    next: { revalidate: 0 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const jsonData = await res.json();
  // Format data yang diterima sesuai dengan ITeam
  const formattedData: ITeam[] = jsonData.results.map((user: any) => ({
    username: user.name.first,
    email: user.email,
    image: user.picture.medium,
  }));

  return formattedData;
}

export default async function Team(){
  const data = await getData();
    
  return (
    <div>

    {data.map((item) => {
      return(
        <div className="flex justify-start gap-2 items-center">
          <div className="m-2 w-[70px] h-[70px] rounded-full overflow-hidden">
          <Image
          src={item.image}
          alt="team"
          width={100}
          height={100}
          />
          </div>
          <div className="flex flex-col">
          <p className="font-semibold">{item.username}</p>
          <p>{item.email}</p>
          </div>
        </div>
        )
      })}
      </div>
  );
};

