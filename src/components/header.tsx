import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function Header() {
  return (
    <div className="flex p-5 static ">
      <div className="w-[20%] pr-5">
        <Button variant={"link"}>
          <Avatar className="w-[70px] h-12">
            <AvatarImage src="logo.png" />
          </Avatar>
        </Button>
      </div>
      <div className="w-[60%] pr-5 flex space-x-8">
        <Input type="search" className="py-5 bg-white text-black px-5" />
        <Button type="submit">Search</Button>
      </div>
      <div className="w-[18%] space-x-5 pl-16">
        <Button variant={"link"}>
          <FaShoppingCart className="text-white h-8 w-8" />
        </Button>
        <Button variant={"link"}>
          <FcLike className="text-white h-10 w-10" />
        </Button>
        <Button variant={"link"}>
          <FaUserCircle className="text-white h-10 w-10 border rounded-full" />
        </Button>
      </div>
    </div>
  );
}
