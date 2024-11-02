import Footer from "@/components/landing-page/footer";
import Navbar from "@/components/landing-page/navbar";
import RestaurantSection from "@/components/restaurant-section";

export default function Page() {
  return (
    <main className="mx-4 md:mx-20 ">
        <Navbar/>
        <RestaurantSection/>
        {/* <Footer/> */}
    </main>
  )
}
