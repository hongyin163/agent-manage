"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import withSession from "@/components/with-session";

const menus = [
  {
    key: "list",
    name: "Agents",
  },
  {
    key: "setting",
    name: "Setting",
  },
];

export function AgentNav() {
  const route = useRouter();
  const pathname = usePathname();
  const current = pathname?.split("/").pop();
  console.log(route);
  const onItemClick = (menu: { key: string; name: string }) => {
    route.push(`/agent/${menu.key}`);
  };
  return (
    <nav className=" bg-white-50 w-50 border-r-2 border-gray-50 ">
      {menus.map((menu) => {
        return (
          <div
            key={menu.key}
            className={`h-10 leading-10 px-5 hover:bg-gray-50 cursor-pointer ${
              current === menu.key ? " bg-gray-50 " : ""
            }`}
            onClick={onItemClick.bind(null, menu)}
          >
            {menu.name}
          </div>
        );
      })}
    </nav>
  );
}

export default withSession(AgentNav);
