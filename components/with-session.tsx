"use client";

import { useSession } from "next-auth/react";
import React from "react";
import SignInDialog from "./sign-in-dialog";
export default function withSession(Component: React.FunctionComponent) {
  return function ComponentWithSession(props: any) {
    const { data: session, status } = useSession();
    if (status === "loading") {
      return null;
    }
    if (status === "unauthenticated") {
      return <SignInDialog closeable={false} open={true} />;
    }
    return <Component {...props} />;
  };
}
