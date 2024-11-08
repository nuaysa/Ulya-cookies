"use client"
;
import React from "react";
import Image from "next/image"

export default function ProductsDisplay () {
        return (
            <div className="w-1/3">
                    <div className="w-[450px] h-[510px] mt-2 rounded-2xl overflow-hidden">
                        <Image
                            src=
                            "/kue-4.png"
                            alt="image4"
                            width={1000}
                            height={900}
                            objectFit="cover"
                        />
             </div>
        </div>
        );
    };