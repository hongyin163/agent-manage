"use client";
import { redirect } from "next/navigation";

import LoginBtn from "@/components/LoginBtn";
function MyComponent() {
  return (
    <div>
      <h2>Login by Google</h2>
      <LoginBtn />
    </div>
  );
}

export default MyComponent;
