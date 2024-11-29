"use client";

import { GrLocationPin } from "react-icons/gr";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CiStar } from "react-icons/ci";
import { Star } from "lucide-react";
import { useState } from "react";
import { SiSwiggy, SiZomato } from "react-icons/si";


export type FoodCardProps = {
    data: {
        restaurant: {
            id: number,
            image: string,
            name: string,
        },
        id: number,
        image: string,
        name: string,
        swiggyPrice: number,
        zomatoPrice: number,
        restaurantId: number,
    }
}

export default function FoodCard({ data }: FoodCardProps) {

    const [activeId, setActiveId] = useState()

    // console.log(data);

    return (
        <Card className="w-64 h-96  overflow-hidden">

            <CardHeader className="px-6 pt-3 pb-2 -space-x-1 flex-col h-[14%]">
                <CardTitle>{data.name}</CardTitle>
                <CardDescription className="flex items-center m-0 p-0">
                    <GrLocationPin />
                    {data.restaurant.name}
                </CardDescription>
            </CardHeader>

            <CardContent className="h-[70%] flex flex-col items-center justify-center gap-2 pb-4">

                {/* TODO : Object center not working */}
                <div className="h-[45%] overflow-hidden object-center object-fill">
                    <Image
                        src={data.image}
                        alt="Dishes"
                        width={200}
                        height={200}
                        className="w-full hover:scale-105 transition-all duration-500  object-center object-fill"
                        
                    />

                </div>

                <div className="flex items-center gap-2 w-full h-[55%]">
                    {/* On active -> enlarge */}

                    <div className="border gap-5 flex flex-col h-full items-center justify-center flex-1">
                        
                        <SiSwiggy size={30} className="text-orange-500 p-0 m-0" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h2 className="font-semibold text-2xl">₹{data.swiggyPrice}</h2>
                            <p className="flex items-center justify-center gap-1 text-sm -mt-1">4.3 <Star className="text-primary fill-primary" size={14} /></p>
                        </div>
                    </div>


                    <div className="border flex flex-col gap-2 h-full items-center justify-center flex-1">
                        <SiZomato size={48} className="text-red-500 p-0 m-0"/>
                        <div className="flex flex-col gap-4 items-center justify-center ">
                            <h2 className="font-semibold text-2xl">₹{data.zomatoPrice}</h2>
                            <p className="flex items-center text-sm -mt-1">4.3 <CiStar className="text-primary " size={20} /></p>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="py-0 flex items-center justify-center ">
                <Button className="w-full">Buy Now</Button>
            </CardFooter>
        </Card>
    )
}
