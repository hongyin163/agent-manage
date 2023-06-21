"use client";

import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Loading from "@/components/loading";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function Component() {
  const route = useRouter();
  const searchParams = useSearchParams();
  // const [loading, setLoading] = useState(false);
  const callbackUrl = searchParams?.get("callbackUrl");
  const { data: session, status } = useSession();

  const loading = status == "loading";

  useEffect(() => {
    if (session && callbackUrl) {
      // window.location.href = callbackUrl;
      route.push(callbackUrl);
    }
  }, [session, callbackUrl]);

  useEffect(() => {
    if (session && !callbackUrl) {
      route.push("/");
    }
  }, [session, callbackUrl]);

  if (loading) {
    return null;
  }

  if (session) {
    return null;
  }
  return (
    <div className="flex flex-col justify-center  items-center ">
      <div className="flex flex-col w-80 text-center">
        <h2 className=" text-2xl m-10">Sign in</h2>
        <Button
          disabled={loading}
          className="mb-5"
          onClick={() => signIn("google")}
        >
          Sign in by Google
        </Button>
        <Button disabled={loading} onClick={() => signIn("github")}>
          Sign in by Github
        </Button>
      </div>
    </div>
  );
}
