"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";

import { useSession, signIn, signOut } from "next-auth/react";
import GoogleIcon from "./icons/google";
import GitHubIcon from "./icons/github";
import SignInForm from "./sign-in-form";
export default function SignInDialog({
  closeable = true,
  open,
  onOpenChange,
}: {
  closeable: boolean;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const { data: session, status } = useSession();

  const loading = status == "loading";
  const onSubmit = (values: any) => {
    signIn("credentials", values);
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className=" mb-2">
          <DialogTitle className=" text-center">Sign in</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 px-10">
          <Button
            variant={"outline"}
            disabled={loading}
            className="mb-1"
            onClick={() => signIn("google")}
          >
            <GoogleIcon />
            <span className="ml-5">Sign in with Google</span>
          </Button>
          <Button
            variant={"outline"}
            disabled={loading}
            onClick={() => signIn("github")}
          >
            <GitHubIcon />
            <span className="ml-5">Sign in with Github</span>
          </Button>
        </div>
        <hr />
        <div className=" px-10">
          <SignInForm onSubmit={onSubmit} />
        </div>
        {closeable && (
          <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Close>
        )}
      </DialogContent>
    </Dialog>
  );
}
