"use client";
import { getProviders, signIn } from "next-auth/react";
import React from "react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

const SignInComponent = ({ providers }: Props) => {
  return (
    <div>
      {Object.values(providers!).map((provider) => (
        <div className="mt-[10px]" key={provider.name}>
          <button
            className="bg-blue px-[20px] py-[10px] rounded-md text-white hover:bg-green"
            onClick={() => {
              try {
                signIn(provider.name.toLowerCase(), {
                  callbackUrl: process.env.NEXTAUTH_URL || "http://localhost:5000/chat-room",
                });
              } catch (err) {
                console.log(err, "error from login");
              }
            }}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default SignInComponent;
