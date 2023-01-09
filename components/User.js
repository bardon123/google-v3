import React from "react";
import { UseSession, signIn, signOut, useSession } from "next-auth/react";

export default function User() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button
          onClick={signOut}
          className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
        onClick={signIn}
      >
        {" "}
        Sign in
      </button>
    </>
  );
}
