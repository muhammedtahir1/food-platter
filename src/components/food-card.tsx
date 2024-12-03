"use client";

import { GrLocationPin } from "react-icons/gr";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CiStar } from "react-icons/ci";
import { Star } from 'lucide-react';
import { useState } from "react";
import { SiSwiggy, SiZomato } from "react-icons/si";
import Link from "next/link";

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
        veg: boolean,
    }
}

export default function FoodCard({ data }: FoodCardProps) {
    const [activeCard, setActiveCard] = useState<'swiggy' | 'zomato' | null>(null);

    return (
        <Card className="w-64 h-96 overflow-hidden">
            <CardHeader className="px-6 pt-3 pb-2 space-y-[2px] h-[14%]">
                <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                        <CardTitle>{data.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1 m-0 p-0 text-sm text-muted-foreground">
                            <GrLocationPin />
                            {data.restaurant.name}
                        </CardDescription>
                    </div>

                    <div className="">
                        {data.veg ? (
                            <Image
                                src={"https://i.pinimg.com/originals/e4/1f/f3/e41ff3b10a26b097602560180fb91a62.png"}
                                alt="Food Label"
                                height={30}
                                width={30}
                            />
                        ) : (
                            <Image
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Non_veg_symbol.svg/2048px-Non_veg_symbol.svg.png"}
                                alt="Food Label"
                                height={35}
                                width={35}
                            />
                        )}
                    </div>
                </div>

            </CardHeader>

            <CardContent className="h-[70%] flex flex-col items-center justify-center gap-2 pb-4">
                <div className="h-[45%] w-full relative flex items-center justify-center overflow-hidden">
                    <Image
                        src={data.image}
                        alt="Dishes"
                        width={200}
                        height={200}
                        className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                    />
                </div>

                <div className="flex items-center gap-2 w-full h-[55%]">
                    {/* Swiggy card */}
                    <div
                        onClick={() => setActiveCard('swiggy')}
                        className={`border gap-5 flex flex-col h-full items-center justify-center flex-1 cursor-pointer transition-all duration-300 ${activeCard === 'swiggy' ? 'scale-105 shadow-lg border-orange-500' : 'hover:border-orange-500/50'
                            }`}
                    >
                        <SiSwiggy size={30} className="text-orange-500 p-0 m-0" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h2 className="font-semibold text-2xl">₹{data.swiggyPrice}</h2>
                            <p className="flex items-center justify-center gap-1 text-sm -mt-1">
                                4.3 <Star className="text-primary fill-primary" size={14} />
                            </p>
                        </div>
                    </div>

                    {/* Zomato card */}
                    <div
                        onClick={() => setActiveCard('zomato')}
                        className={`border flex flex-col gap-2 h-full items-center justify-center flex-1 cursor-pointer transition-all duration-300 ${activeCard === 'zomato' ? 'scale-105 shadow-lg border-red-500' : 'hover:border-red-500/50'
                            }`}
                    >
                        <SiZomato size={48} className="text-red-500 p-0 m-0" />
                        <div className="flex flex-col gap-4 items-center justify-center">
                            <h2 className="font-semibold text-2xl">₹{data.zomatoPrice}</h2>
                            <p className="flex items-center text-sm -mt-1">
                                4.3 <CiStar className="text-primary" size={20} />
                            </p>
                        </div>
                    </div>
                </div>
            </CardContent>

            <CardFooter className="py-0 flex items-center justify-center">
                {activeCard === 'swiggy' ? (
                    <Link href="https://www.swiggy.com" className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-orange-500 hover:bg-orange-600">Order on Swiggy</Button>
                    </Link>
                ) : activeCard === 'zomato' ? (
                    <Link href="https://www.zomato.com" className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-red-500 hover:bg-red-600">Order on Zomato</Button>
                    </Link>
                ) : (
                    <Button className="w-full" disabled>Select a platform</Button>
                )}
            </CardFooter>
        </Card>
    )
}

