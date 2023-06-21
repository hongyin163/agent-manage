"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import ReactGoogleButton from "react-google-button";

export default function Component() {
  const { data: session, status } = useSession();
  console.log(session);
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
