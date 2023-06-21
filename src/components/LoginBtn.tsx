"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import ReactGoogleButton from "react-google-button";
import { useSearchParams } from "next/navigation";

export default function Component() {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams?.get("callbackUrl");
  const { data: session, status } = useSession();
  console.log(session);

  useEffect(() => {
    if (session && callbackUrl) {
      window.location.href = callbackUrl;
    }
  }, [session, callbackUrl]);

  if (status == "loading") {
    return <div>Loading</div>;
  }
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <ReactGoogleButton onClick={() => signOut()}>
          Sign out
        </ReactGoogleButton>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <ReactGoogleButton onClick={() => signIn("google")}>
        Sign in by Google
      </ReactGoogleButton>
      <button onClick={() => signIn("github")}>Sign in by Github</button>
    </>
  );
}
