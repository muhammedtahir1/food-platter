import H1 from "./landing-page/h1";
import RestaurantCard from "./restaurant-card";

const data = [
    {
        image: "",
        name: "Al-Zara"
    }
]

export default function RestaurantSection() {
  return (
    <main>
        <H1>Famous Restaurants</H1>
        <div className="flex flex-wrap gap-6 items-center justify-center">
            <RestaurantCard/>
            
        </div>
    </main>
  )
}
