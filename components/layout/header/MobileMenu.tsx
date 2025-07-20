import React from "react";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className="md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
          <SheetTitle className="flex justify-center">
              <Link href="/" className="headerItem text-4xl  !text-blue-600">
          Logo
        </Link>
          </SheetTitle>
                  <nav className=" md:mt-0 flex-col flex space-y-4 mt-8  pl-7">
          <Link
            href={"/"}
            className="headerItem text-xl  !text-amber-600"
          >
            Home
          </Link>
          <Link
            href={"/about"}
            className="headerItem text-xl  !text-amber-600"
          >
            About
          </Link>
          <Link
            href={"/blog"}
            className="headerItem text-xl  !text-amber-600"
          >
            Blog
          </Link>
          <Link
            href={"/blog2"}
            className="headerItem text-xl  !text-amber-600"
          >
            Blog2
          </Link>
          <Link
            href={"/contact"}
            className="headerItem text-xl !text-amber-600"
          >
            Contact
          </Link>
          <ModeToggle/>
        </nav>

      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
