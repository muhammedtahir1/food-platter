import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/landing-page/navbar";


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
