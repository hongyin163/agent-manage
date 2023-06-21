"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import SignIn from "./SignIn";
import Logo from "./Logo";

export default function Header() {
  return (
    <div className=" flex flex-row justify-between text-right pr-5 leading-6">
      <div className="leading-10 text-4xl ml-5 mr-5">
        <Logo />
      </div>
      <Navigation />
      <SignIn />
    </div>
  );
}
