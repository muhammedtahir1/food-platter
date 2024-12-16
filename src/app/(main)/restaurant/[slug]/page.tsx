"use client"
import { usePathname } from "next/navigation"

export default function Page() {

    const pathname = usePathname()
    const path = pathname.toString().replace("%20", " ").split("/restaurant/")
    console.log(path[1]);

  return (
    <div className="text-2xl h-screen flex items-center justify-center">
      <h1 className="text-orange-300">Future update - </h1>
      <p>  List of dishes in that restaurant</p>
    </div>
  )
}
