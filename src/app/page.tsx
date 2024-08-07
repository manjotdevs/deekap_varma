"use client";
import React, { useEffect, useState } from "react";
import Login from "@/components/ login";
import SignInWithGoogle from "./auth/google/googleSignIn";
import { account } from "./appWriteConfig";
import { OAuthProvider } from "appwrite";

const loginWithGoogle = async () => {
  try {
    await account.createOAuth2Session(
      OAuthProvider.Google, // Use uppercase
      'http://localhost:3000/admin', // Replace with your app's dashboard URL
      'http://localhost:3000/verification' // Replace with your app's sign-in URL
    );
  } catch (error) {
    console.error(error); // Handle error
  }
};
const Home: React.FC = () => {
  return (
    <div>
      <p>hi it works</p>
      <div>
        <h1>Metal Prices</h1>
        <button className="bg-gray-800 rounded p-5" onClick={()=>{<Login/>}}>login</button>
        <button className="bg-gray-800 rounded p-5">sign</button>
        <Login />
        <p>googler ...............</p>
        <button onClick={loginWithGoogle}>google sign_in</button>
        <br />
        <button onClick={SignInWithGoogle} >com google</button>
        <SignInWithGoogle />
      </div>
    </div>
  );
};

export default Home;
