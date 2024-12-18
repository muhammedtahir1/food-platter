import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./dark-mode-toggle";
import Logo from "./logo";
import SearchBar from "./search-bar";
import { IoIosSearch } from "react-icons/io";
import { auth } from "@/lib/auth";
import { FaUser } from "react-icons/fa6";


const Navbar = async () => {

	const user = await auth()


	return (
		<header className="py-3 md:py-4 flex items-center justify-between border-b border-primary">
			<Link href={"/"} className="flex items-center">
				<Logo />
				<h2 className="tracking-tighter ">Food <span className="text-primary"> Platter</span></h2>
			</Link>



			<div className="hidden md:block">
				<SearchBar />
			</div>

			<div className="md:hidden -mr-12">
				<Link href={"/search"}>
					<IoIosSearch size={22} />

				</Link>
			</div>

			<div className="flex items-center gap-1 md:gap-3">

				{!user ? (
					<>
						<Link href={"/login"}>
							<Button >Login</Button>
						</Link>
						<Link href={"/signup"}>
							<Button className="hidden md:block" variant={"outline"}>  Sign Up</Button>
						</Link>
					</>
				) : (
					<>
						<Link href={"/logout"}>
							
							<Button className="flex" variant={"default"}> <span><FaUser /></span> User</Button>
						</Link>
					</>
				)}

				<ModeToggle />
			</div>
		</header>
	);
};

export default Navbar;
