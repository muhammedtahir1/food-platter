"use client"
import FoodCard, { FoodCardProps } from '@/components/food-card'
import H1 from '@/components/landing-page/h1'
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

type DisplayFoodType = {
    restaurant: {
      image: string,
      name: string,
      id: number
    },
    image: string,
    name: string,
    id: number,
    swiggyPrice : number,
    zomatoPrice : number
    restaurantId: number,
  }

export default function DisplayFoods({data} : {data : DisplayFoodType[] }) {

  // const params = usePathname()
  const searchParams = useSearchParams()
  const qParams = searchParams.get("q")
  console.log(qParams);

  return (
    <section className="mb-20">
        <H1>Showing results for: {qParams}</H1>
        <div className="flex flex-wrap gap-6 items-start justify-center">
          
            {data.map((food, i)=> (
              <FoodCard key={i} data={food}/> 
            ) )}
            
            
        </div>
    </section>
  )
}
