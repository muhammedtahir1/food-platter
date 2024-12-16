import React from "react";
import { GitHubLogoIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="py-10 flex px-5 md:px-10 justify-between items-center border-t-2 border-white/20 ">
      <section className="space-y-1">
        <div className="flex items-center">
        <Logo />
        <h1>Food Platter</h1>
        </div>
        <p className="text-xs opacity-80 ">© 2023 Food Platter, Inc.</p>
      </section>
      <section className="flex gap-3 items-center">
        <Link href={"https://github.com/muhammedtahir1/food-platter"} target="_blank">
          <GitHubLogoIcon className="size-7" />
        </Link>
        <Link href={"https://x.com/home"}>
          <FaXTwitter className="size-7" />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
