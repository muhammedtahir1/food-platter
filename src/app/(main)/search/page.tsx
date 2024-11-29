import SearchBar from "@/components/landing-page/search-bar";
import prisma from "@/lib/db";
import DisplayFoods from "./display-food";
import Navbar from "@/components/landing-page/navbar";


export default async function page({searchParams} : {
    searchParams: { [key: string]: string | string[] | undefined };
}) {

    // const searchQuery = await searchParams.q

    let food

  if(searchParams.q){
    food = await prisma.food.findMany({
      where: {
        name: {
          contains: searchParams.q  as string
        }
      },
      include: {
        restaurant: true
      }
    })
    console.log(food);
  }
  else{
    // return {
    //   message : "Item not found"
    // }
    food = await prisma.food.findMany({
        where: {
          name: {
            contains: searchParams.q as string,
          },
        },
        include: {
          restaurant: true
        },
        take: 6
      })
  }

  // console.log(food);


  return (
    <main className="mx-4 md:mx-20">
        {/* <SearchBar/> */}
        <Navbar/>
        <DisplayFoods data={food} />
        
    </main>
  )
}
