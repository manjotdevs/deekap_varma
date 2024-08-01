"use client";
import React, { useEffect, useState } from "react";
import Login from "@/components/ login";

const Home: React.FC = () => {
  return (
    <div>
      <p>hi it works</p>
      <div>
        <h1>Metal Prices</h1>
        <button className="bg-gray-800 rounded p-5" onClick={()=>{<Login/>}}>login</button>
        <button className="bg-gray-800 rounded p-5">sign</button>
        <Login />
      </div>

    </div>
  );
};

export default Home;
