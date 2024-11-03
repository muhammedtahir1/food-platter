import Image from "next/image";
import { Card, CardFooter, CardHeader } from "./ui/card";


type PageProps = {
    restaurant : {
        image: string,
        name : string
    }
}

export default function RestaurantCard({restaurant}: PageProps) {

    const {image, name} = restaurant

    return (
        <Card className="w-56 h-48  rounded-lg flex flex-col gap-2 items-center justify-between hover:shadow-md transition-all duration-300">
            <CardHeader className="h-[85%] w-full overflow-hidden rounded-t-lg p-0">

                <Image
                    src={image}
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
                <h2>{name}</h2>
            </CardFooter>
        </Card>
    )
}
