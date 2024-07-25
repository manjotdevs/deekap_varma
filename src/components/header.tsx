"client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex p-5 ">
      <div className="w-[20%]">
        <Button variant={"link"}>
          <Avatar className="w-[70px] h-12">
            <AvatarImage src="logo.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
      <div className="w-[50%] flex space-x-8">
        <Input type="search" className="py-5 px-5" />
        <Button type="submit">Search</Button>
      </div>
      <div>
        <Button variant={"link"}>
          <FaShoppingCart className="text-white h-8 w-8" />
        </Button>
        <Button variant={"link"}>
          <Avatar className="w-[70px] h-12">
            <AvatarImage src="" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </div>
  );
}
