import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";


export default function RestaurantCard() {
    return (
        <Card className=" w-48 h-52  rounded-lg flex flex-col gap-2 items-center justify-between hover:shadow-md transition-all duration-300">
            <CardHeader className="h-[85%] w-full overflow-hidden rounded-t-lg p-0">

                <Image
                    src={"https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/4:3/w_1440,h_1080,c_limit/Untitled%20design%20(14).png"}
                    alt="restaurant"
                    width={200}
                    height={200}
                    style={{
                        objectFit: 'cover',
                      }}
                    className="w-full h-full hover:scale-105 transition-all duration-300"
                />
            </CardHeader>
            <CardFooter className="h-[20%] text-center font-medium text-xl p-0">
                <h2>Al-Zara</h2>
            </CardFooter>
        </Card>
    )
}
