import { GrLocationPin } from "react-icons/gr";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { CiStar } from "react-icons/ci";
import { Star } from "lucide-react";

export default function FoodCard() {
    return (
        <Card className="w-64 h-80 overflow-hidden">

            <CardHeader className="px-6 pt-3 pb-2 -space-x-1 flex-col ">
                <CardTitle>Burger</CardTitle>
                <CardDescription className="flex items-center m-0 p-0">
                    <GrLocationPin />
                    Socials
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col items-center justify-center gap-2 pb-4">
                <Image
                    src={"https://www.certifiedangusbeef.com/_next/image?url=https%3A%2F%2Fappetizing-cactus-7139e93734.media.strapiapp.com%2FThe_Chicago_Burger_41a6888826.jpeg&w=3840&q=75"}
                    alt="Dishes"
                    width={200}
                    height={200}
                    className="w-full hover:scale-105 transition-all duration-500"
                />

                <div className="flex items-center gap-2 w-full">
                <div className="border flex items-center justify-evenly flex-1">
                    <Image
                            src={"https://static.thearcweb.com/images/PROD/PROD-30ba90b6-0925-423a-9842-bc34b4469195.png"}
                            alt="swiggy"
                            height={30}
                            width={30}
                        />
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="font-semibold text-xl">₹280</h2>
                            <p className="flex items-center justify-center gap-1 text-sm -mt-1">4.3 <Star className="text-primary fill-primary" size={14} /></p>
                        </div>
                    </div>


                    <div className="border flex items-center justify-evenly flex-1">
                    <Image
                            src={"https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png"}
                            alt="swiggy"
                            height={30}
                            width={30}
                        />
                        <div className="flex flex-col items-center justify-center ">
                            <h2 className="font-semibold text-xl">₹240</h2>
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
