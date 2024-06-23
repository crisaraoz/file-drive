"use client";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

import { ClerkProvider, SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Home() {
  const createFile = useMutation(api.files.createFile);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>
        <SignedIn>
          <SignOutButton>
            Sign Out
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
          Sign In
          </SignInButton>
        </SignedOut>
      </header>
      <button onClick={()=> {
        createFile({
          name: "New File22"
        })
      }}>Click me</button>
    </main>
  );
}
