"use client";

import { OrganizationProfile, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function OrganizationProfilePage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-black text-white">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <OrganizationProfile
          appearance={{
            elements: {
              rootBox: "bg-black text-white",
            },
          }}
        />
        <Link href="/" className="mt-6 text-blue-500 underline">
            ← Back to Home
        </Link>
      </SignedIn>
    </main>
  );
}