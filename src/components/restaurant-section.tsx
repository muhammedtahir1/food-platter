import { Item } from "@radix-ui/react-dropdown-menu";
import H1 from "./landing-page/h1";
import RestaurantCard from "./restaurant-card";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const restaurantData = [
  {
    image: "https://assets.architecturaldigest.in/photos/64f85037ec0bc118bdd98aba/4:3/w_1440,h_1080,c_limit/Untitled%20design%20(14).png",
    name: "Al-Zara"
  },
  {
    image: "https://suruchitra.wordpress.com/wp-content/uploads/2017/10/meghana-foods-jayanagar-bangalore-e1507789998545.jpg",
    name: "Meghana foods"
  },
  {
    image: "https://lh5.googleusercontent.com/p/AF1QipOSjoKfuqmCD5Hw_fTYXFRg2jUnr3FOXNP-Ot3s",
    name: "Kabab Magic"
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/6/18727906/6a0770a34cb6d719c2f5521220ca4897.jpg",
    name: "Socials"
  },
  {
    image: "https://b.zmtcdn.com/data/pictures/6/18727906/6a0770a34cb6d719c2f5521220ca4897.jpg",
    name: "Socials"
  },
]

export default function RestaurantSection() {
  return (
    <main className="border-b  pb-10 md:pb-12 mx-4 md:mx-24">
      <H1>Famous Restaurants</H1>
      <div className="flex flex-wrap gap-6 items-center justify-center">

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent >
            {restaurantData.map((item, i) => (
              <CarouselItem key={i} className="basis-60 md:basis-1/2 lg:basis-1/4">
                <div className="">

                  <RestaurantCard  restaurant={item} />

                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>



      </div>
    </main>
  )
}
