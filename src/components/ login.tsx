import React, { useState } from "react";
import { account } from "@/app/appWriteConfig";
import { ID } from "appwrite";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const addUser = async (e: any) => {
    e.preventDefault();
    const promise = account.create(ID.unique(), email, password);
    console.log("User created with ID:", (await promise).$id);

    promise.then(
      (ress: any) => {
        console.log(ress);
        console.log("User registered successfully");
        verification(e);
      },
      (err: any) => {
        console.error("Error creating user:", err);
        console.log("Failed to register user. Please try again.");
      }
    );
  };

  const loginUser = async (e: any) => {
    e.preventDefault();
    try {
      await account.createEmailPasswordSession(email, password);
      console.log("User logged in successfully");
    } catch (err) {
      console.error("Error logging in:", err);
      console.log("Failed to login user. Please check your credentials.");
    }
  };

  const verification = async (e: any) => {
    e.preventDefault();
    const promise = account.createVerification("http://localhost:3000/");

    promise.then(
      function (ress) {
        console.log(ress);
        console.log("Verified");
      },
      function (err) {
        console.log(err);
      }
    );
  };

  return (
    <div className="flex p-4 space-x-5">
      <input
        className="text-black"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="text-black"
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide password" : "Show password"}
      </button>
      <button onClick={addUser}>Register</button>
      <button onClick={loginUser}>Login</button>
      <AlertDialog>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Login;
