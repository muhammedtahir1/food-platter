import FoodSection from "@/components/food-section";
import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";
import RestaurantSection from "@/components/restaurant-section";


export default async function Page(
//   {searchParams} : {
//   searchParams: { [key: string]: string | string[] | undefined };
// }
) {

  // console.log("🎈",searchParams.q);
  

  
  // await addRestaurantWithFood()

  return (
    <main className="mx-4 md:mx-20 ">
        <Navbar/>
        <RestaurantSection/>
        <FoodSection />
        <Footer/>
    </main>
  )
}
