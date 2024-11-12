"use client"
;
import React from "react";
import Image from "next/image"

export default function ProductsDisplay () {
        return (
            <div className="lg:w-1/3">
                    <div className="max-w-[300px] sm:max-w-[300px] lg:min-w-[45np0px] lg:h-[510px] max-mt-2 rounded-sm lg:rounded-2xl overflow-hidden">
                        <Image
                            src=
                            "/menu/hampers.jpg"
                            alt="image4"
                            width={1000}
                            height={900}
                            objectFit="cover"
                        />
             </div>
        </div>
        );
    };