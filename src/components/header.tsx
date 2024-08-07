"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import { LuPackagePlus } from "react-icons/lu";
import { LuPackageCheck } from "react-icons/lu";
export default function Header() {
  return (
    <div className="flex py-5 px-10 static ">
      <div className="w-[25%] flex pr-5">
        <div>
          <Button variant={"link"}>
            <Avatar className="w-[70px] h-12">
              <AvatarImage src="logo.png" />
            </Avatar>
          </Button>
        </div>
        <div>
          <p className="font-bold px-1 text-xl">Deepak jwellers</p>
        </div>
      </div>
      <div className="w-[55%] pr-5 flex space-x-8">
        <Input type="search" className="py-5 bg-white text-black px-5" />
        <Button type="submit">Search</Button>
      </div>
      <div className="w-[20%] flex space-x-5 pl-16">
        <div>
          <Button variant={"link"}>
            <LuPackageCheck className="text-white h-8 w-8" />
          </Button>
        </div>
        <div>
          <Button variant={"link"}>
            <FaShoppingCart className="text-white h-8 w-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
