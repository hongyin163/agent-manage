"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const { data: session, status } = useSession();

  if (status == "loading") {
    return <div className=" text-right pr-5 leading-6">Loading</div>;
  }
  if (session) {
    return (
      <div className=" text-right pr-5 leading-6">
        <b className=" mr-5">{session?.user?.email}</b>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <div className=" text-right pr-5 leading-6">
      <Link href={"/auth/login"}>Sign in</Link>
    </div>
  );
}
