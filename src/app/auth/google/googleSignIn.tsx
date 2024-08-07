"use client";
import React, { useEffect } from "react";
import { account } from "@/app/appWriteConfig";
import { OAuthProvider } from "appwrite";

const SignInWithGoogle: React.FC = () => {
  const loginWithGoogle = async () => {
    try {
    const id =  await account.createOAuth2Session(
        OAuthProvider.Google, // Use uppercase
        "http://localhost:3000/admin", // Replace with your app's dashboard URL
        "http://localhost:3000/verification" // Replace with your app's sign-in URL
      );
      userProfile();
    } catch (error) {
      console.error(error); // Handle error
    }
  };

  const userProfile = async () => {
    const user = await account.get();
    console.log(user);
    console.log(user.prefs.picture);
  };

  return (
    <div>
      <button className="bg-green-500 p-3" onClick={loginWithGoogle}>
        Login with Google
      </button>
      <button
        onClick={() => {
          console.log(userProfile);
        }}
      >
        use
      </button>
    </div>
  );
};

export default SignInWithGoogle;
