import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";
import Testimonial from "@/components/landing-page/testimonials";


export default function Home() {
  return (
    <main className="mx-4 md:mx-20 ">
      <Navbar/>
      <Hero/>
      {/* <Features/> */}
      {/* <Testimonial /> */}
      <Footer/>
    </main>
  );
}
