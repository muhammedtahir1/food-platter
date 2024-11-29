"use client"

import { useState } from "react";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/navigation";


export default function SearchBar() {

  const [inputText, setInputText] = useState("")
  const router = useRouter()

  function handleSubmit(e : React.FormEvent<HTMLFormElement>){
    e.preventDefault()

    if(!inputText) return

    router.push(`/search?q=${inputText}`)
  }


  return (
    <form className="flex items-center" onSubmit={handleSubmit}>
        <Input className="w-80" 
          type="text" 
          placeholder="Search for dishes.."
          onChange={(e)=> setInputText(e.target.value)}
          value={inputText}
          
        />
        <CiSearch size={24} className="-ml-10"  type="submit"/>
    </form>
  )
}
