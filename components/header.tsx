"use client";

import NavigationMenu from "./navigation-menu";
import ProfileMenu from "./profile-menu";
import Logo from "./logo";

export default function Header() {
  return (
    <div className=" flex flex-row justify-between text-right pb-5 pt-5 pr-5 leading-6">
      <div className="leading-10 text-4xl ml-5 mr-5">
        <Logo />
      </div>
      <NavigationMenu />
      <ProfileMenu />
    </div>
  );
}
