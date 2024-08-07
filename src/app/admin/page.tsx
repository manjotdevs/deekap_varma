"use client";
import React, { useState } from "react";

export default function admin() {
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const [login, setlogin] = useState(false); 

  const a = () => {
    if (user === "deepak" && password === "123" && login== true) {
      return <div>Welcome Deepak</div>;
    }
  };
  return (
    <div>
      <h1>Admin Login</h1>
      <input
        type="text"
        placeholder="username"
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
      />
      <button
        onClick={() => {
          console.log(user, password);
          console.log(a)
        }}
      >
        login
      </button>
    </div>
  );
}
