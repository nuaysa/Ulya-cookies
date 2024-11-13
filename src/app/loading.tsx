import Image from "next/image";

export default function Loading() {
    return (
        <div className="h-svh flex flex-col justify-center items-center gap-20">
            <Image
            src="/logo.jpg"
            alt="loading"
            width={500}
            height={500}
            className="rounded-full animate-pulse"
            />
            <h1 className="font-semibold text-3xl text center text-neutral-800">Loading...</h1>
            <h2 className="font-semibold text-3xl text center text-neutral-800">Please Wait</h2>
        </div>
    )
}