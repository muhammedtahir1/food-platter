"use client"
import { usePathname } from "next/navigation"

export default function Page() {

    const pathname = usePathname()
    const path = pathname.toString().replace("%20", " ").split("/restaurant/")
    console.log(path[1]);

  return (
    <div className="text-2xl h-screen flex items-center justify-center"><span className="text-orange-300">Future update</span> - after getting our first seed investment</div>
  )
}
