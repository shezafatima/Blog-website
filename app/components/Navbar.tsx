import Link from "next/link";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Lilita_One } from "next/font/google";
import SearchBar from "./SearchBar";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/sheet"


const font = Lilita_One({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-6">
      <div className="flex justify-between items-center h-16 w-full flex-wrap">
       
        <Link href="/">
          <div className={`${font.className} text-3xl dark:text-amber-50`}>
            TechNow
            <span className="text-purple-500">ledge</span>
          </div>
        </Link>
        <div className="md:hidden  block">
        <Sheet>
          <div className="flex justify-end px-8 items-center text-2xl flex-wrap">
            <SheetTrigger className="dark:text-white">
              <IoMdMenu />
            </SheetTrigger>
          </div>
          <SheetContent className="w-[400px] sm:w-[540px] ">
            <SheetHeader>
              <div className="flex flex-col justify-center items-center flex-wrap space-y-6 py-20">
                
                <Link href="/" >
                  <SheetTitle className="text-white text-[16px] hover:underline underline-offset-4  flex  justify-center items-center gap-[4px]">Home
                </SheetTitle>
                </Link>
               
                <Link href="/about" >
                  <SheetTitle className="text-white text-[16px] hover:underline underline-offset-4">About</SheetTitle>
                </Link>
                
                <Link href="/blogs" >
                  <SheetTitle className="text-white text-[16px] hover:underline underline-offset-4">Blog</SheetTitle>
                </Link>
               
                <Link href="/contact">
                  <SheetTitle className="text-white text-[16px] hover:underline underline-offset-4">Contact</SheetTitle>
                </Link>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
     
        </div>
        <div className="md:flex hidden gap-12">

        <Link href="/" >
        Home</Link>
        <Link href="/about" >
        About</Link>
        <Link href="/blogs" >
       Blogs</Link>
       <Link href="/contact" >
       Contact</Link>
        </div>
        <SearchBar/>
        <ThemeSwitch />
    
      </div>
    </div>
  );
};

export default Navbar;
