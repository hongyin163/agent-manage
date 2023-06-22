import { CreditCard, LogOut, Settings, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession, signOut } from "next-auth/react";
import { PersonIcon } from "@radix-ui/react-icons";
import SignInDialog from "@/components/sign-in-dialog";
import { useState } from "react";

export default function DropdownMenuDemo() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  const loading = status === "loading";
  const authed = status === "authenticated";
  const unauthed = status == "unauthenticated";
  const onLogOut = async () => {
    await signOut();
  };
  if (loading) {
    return null;
  }
  if (unauthed) {
    return (
      <div className=" text-right h-10 leading-10">
        {/* <Link href={"/auth/login"}>Sign in</Link> */}
        <Button type="button" variant="outline" onClick={() => setOpen(true)}>
          Sign in
        </Button>
        <SignInDialog
          closeable={true}
          open={open}
          onOpenChange={() => setOpen(false)}
        />
      </div>
    );
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className=" inline-block">
          <span> {session?.user?.name}</span>
          <div className=" inline-flex justify-center items-center rounded-full bg-slate-50 w-8 h-8 ml-2 cursor-pointer">
            <PersonIcon />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className=" cursor-pointer" onClick={onLogOut}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
