import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import SignInWithGoogle from "@/app/auth/google/googleSignIn";
export default function SignIn() {
  return (
    <Dialog>
      <DialogTrigger>Sign in</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign in</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <Input type="text" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Sign in</Button>
        </DialogDescription>
        <DialogDescription>
          <SignInWithGoogle />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
