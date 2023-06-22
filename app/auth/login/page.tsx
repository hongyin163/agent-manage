"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import SignInDialog from "@/components/sign-in-dialog";
export default function Component() {
  const route = useRouter();
  const searchParams = useSearchParams();
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
    <div>
      <SignInDialog closeable={false} open={true} />;
    </div>
  );
}
