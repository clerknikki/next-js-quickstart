"use client";

import { CreateOrganization, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

export default function CreateOrganizationPage() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-black text-white">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="w-[400px]">
          <CreateOrganization
            afterCreateOrganizationUrl="/organization/profile"
            appearance={{
              elements: {
                rootBox: "bg-black text-white",
              },
            }}
          />
        </div>
      </SignedIn>
    </main>
  );
}
