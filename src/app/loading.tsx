import Image from "next/image";

export default function Loading() {
    return(
        <div className="h-svh flex flex-col justify-center items-center">
            <Image
            src="/logo.jpg"
            alt="loading..."
            width={1000}
            height={1000}
            className="animate-ping w-[200px] h-[200px]"
            />
            <h1 className="text-3xl font-extrabold">Hold a sec..</h1>
        </div>
    )
}