"use client"
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import useStore from "@/zustand/useStore";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  
  const footerText = useStore((state)=>state.footerText) // daha guvenli
    const {footerText1} = useSelector((state:RootState) =>state.ui)

  return (
    <div className="bg-grayBen text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left ">
          <Link
            href="/"
            className="cursor-pointer text-white text-4xl font-bold"
          >
            {footerText} {footerText1}
          </Link>
          <p className=" mt-4 max-w-150">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptate .
          </p>
        </div>
        <nav className=" md:mt-0  flex mt-4 md:space-y-1 space-x-4">
          <Link
            href={"/"}
            className="cursor-pointer text-white text-xl font-bold hover:underline"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="cursor-pointer text-white text-xl font-bold hover:underline"
          >
            About
          </Link>
          <Link
            href={"/blog"}
            className="cursor-pointer text-white text-xl font-bold hover:underline"
          >
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="cursor-pointer text-white text-xl font-bold hover:underline"
          >
            Contact
          </Link>
        </nav>
        <div className="space-x-2 mt-4 md:mt-0">
          <Button className="cursor-pointer" variant={"secondary"}>
            <FacebookIcon />
          </Button>
          <Button className="cursor-pointer" variant={"secondary"}>
            <InstagramIcon />
          </Button>
          <Button className="cursor-pointer" variant={"secondary"} size={"icon"}>
            <LinkedinIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
