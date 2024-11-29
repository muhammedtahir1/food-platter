
import { getFoods, getFoodsWithRestaurant } from "@/actions/actions";
import FoodCard from "./food-card";
import H1 from "./landing-page/h1";

export default async function FoodSection() {
  // await addFood()
  // await addRestaurantWithFood()
  // const food = await getFoodsWithRestaurant()
  const foods  = await getFoods()
  // console.log(foods);

  

  return (
    <section className="mb-20">
        <H1>Popular Food Items</H1>
        <div className="flex flex-wrap gap-6 items-start justify-center">
          
            {foods.map((food, i)=> (
              <FoodCard key={i} data={food}/> 
            ) )}
            
            
        </div>
    </section>
  )
}
