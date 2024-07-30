"use client";
import React, { useState } from "react";
import { account } from "../appWriteConfig";
import { ID } from "appwrite";

function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const addUser = async () => {
    try {
      // Create the user
      const createResponse = await account.create(ID.unique(), email, password);
      console.log(createResponse);
      alert("User added successfully!");

      // Log in the user to create a session
      const sessionResponse = await account.createSession(email, password);
      console.log('User session created:', sessionResponse);

      // Create the verification
      const verificationResponse = await account.createVerification(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}/verification`);
      console.log(verificationResponse);
      alert("Verification email sent!");
    
    } catch (error: any) {
      console.log('Error:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="flex p-4 space-x-5">
      <input
        className="text-black"
        type="text"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        placeholder="Email"
      />
      <input
        className="text-black"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        placeholder="Password"
      />
      <button
        onClick={() => {
          setShowPassword(!showPassword);
        }}
      >
        {showPassword ? "Hide password" : "Show password"}
      </button>
      <button onClick={addUser}>Register</button>
    </div>
  );
}

export default Login;
