import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";


export default function SearchBar() {
  return (
    <div className="flex items-center">

        <Input className="w-80" type="text" placeholder="Search for dishes.."/>
        <CiSearch size={24} className="-ml-10" />
    </div>
  )
}
