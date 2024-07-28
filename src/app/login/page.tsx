"use client";
import React, { useState } from "react";
import user from "../appWriteConfig"
  
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
          if(showPassword === false){
            setShowPassword(true);
          } else {
            setShowPassword(false);
          }
        }}
      >
        show password
      </button>
      <button
        onClick={() => {
        }}
      >
        show
      </button>
    </div>
  );
};

export default Login;
