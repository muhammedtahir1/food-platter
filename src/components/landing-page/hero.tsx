import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "../ui/badge";
import Image from "next/image";
import hero from "../../../public/hero-image.jpg"


const Hero = () => {
  return (
    <main className="md:px-14 min-h-[70vh] w-full mt-10 md:mt-0 flex flex-col gap-10 md:gap-0 md:flex-row md:justify-evenly md:items-center">
      <div className="">
        <Badge className="bg-black text-white hover:none">🎉 Something special is waiting!</Badge>
        <h1 className="text-5xl mt-2 mb-2 sm:text-6xl sm:w-2/3 capitalize font-bold">
          Find your perfect {""}
          <span className="text-primary ">bite</span>
        </h1>
        <p className="text-md md:text-lg opacity-75 font-extralight md:max-w-[400px]">
          Your personal money saving tool. Compare Choose and Savor the best food options near you!
        </p>
        <Link href={""}>
          <Button
            className="w-36 md:w-48 font-semibold mt-4 md:mt-7 "
            variant={"default"}
          >
            Get Started
          </Button>
        </Link>
      </div>
      <div className="rounded-lg" >
        <Image
          src={hero}
          alt="Hero image"
          width={700}
          height={200}
          className="rounded-lg"
        />
      </div>

    </main>
  );
};

export default Hero;
