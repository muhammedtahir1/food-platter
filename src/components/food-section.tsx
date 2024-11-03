import FoodCard from "./food-card";
import H1 from "./landing-page/h1";

export default function FoodSection() {
  return (
    <section className="mb-20">
        <H1>Popular Food Items</H1>
        <div className="flex flex-wrap gap-6 items-start justify-center">
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
            <FoodCard/>
        </div>
    </section>
  )
}
