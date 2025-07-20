"use client"
import { Button } from "@/components/ui/button";
import { Search, User } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { ModeToggle } from "@/components/ModeToggle";
import useStore from "@/zustand/useStore";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const {headerText} = useStore(); // az güvenli
  const {headerText1} = useSelector((store:RootState)=>store.ui)
  return (
    <div className="headerBg shadow-sm top-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-3  ">
        <Link href="/" className="headerItem text-4xl">
          {headerText} {headerText1}
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href={"/"} className="headerItem text-xl">
            Home
          </Link>
          <Link href={"/about"} className="headerItem text-xl">
            About
          </Link>
          <Link href={"/blog"} className="headerItem text-xl">
            Blog
          </Link>
          <Link href={"/blog2"} className="headerItem text-xl">
            Blog2
          </Link>
          <Link href={"/contact"} className="headerItem text-xl">
            Contact
          </Link>
        </nav>
        <div className="space-x-2">
          <Button variant={"secondary"}>
            <Search />
          </Button>
          <Link href={"/login"}>
            <Button variant={"secondary"}>
              <User />
            </Button>
          </Link>
          <ModeToggle />

          <MobileMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
