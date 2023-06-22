"use client";

import React from "react";
import withSession from "@/components/with-session";
import AgentNav from "@/components/agent-nav";

export function AuthWraper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <div className=" w-60">
        <AgentNav />
      </div>
      <div className=" flex-1 right">{children}</div>
    </div>
  );
}

export default withSession(AuthWraper as React.FunctionComponent);
