"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import Link from "next/link";

const SignOutLink = () => {
  const handelLogout = () => {
    toast("Logout Successfully");
  };
  
  return (
    <SignOutButton>
      <Link href={"/"} onClick={handelLogout} className="w-full text-left">
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
