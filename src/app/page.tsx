"use client"; 
import React, { useEffect, useState } from "react";
import Login from "@/components/ login";

const Home: React.FC = () => {
  return (
    <div>
      <p>hi it works</p>
      <div>
        <h1>Metal Prices</h1>
        <Login />
      </div>
    </div>
  );
};

export default Home;
