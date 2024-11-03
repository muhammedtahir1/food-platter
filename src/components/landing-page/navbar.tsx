import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./dark-mode-toggle";
import Logo from "./logo";
import SearchBar from "./search-bar";


const Navbar = () => {
	return (
		<header className="py-3 md:py-4 flex items-center justify-between border-b border-primary">
			<Link href={"/"} className="flex items-center">
				<Logo />
				<h2 className="tracking-tighter ">Food <span className="text-primary"> Platter</span></h2>
			</Link>

			<div className="hidden md:block">
				<SearchBar />
			</div>

			<div className="flex items-center gap-1 md:gap-3">
				<Link href={"/login"}>
					<Button >Login</Button>
				</Link>
				<Link href={"/signup"}>
					<Button className="hidden md:block" variant={"outline"}>  Sign Up</Button>
				</Link>
				<ModeToggle />
			</div>
		</header>
	);
};

export default Navbar;
