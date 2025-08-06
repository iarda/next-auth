"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      {!session ? (
        <button
          className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-bold shadow"
          onClick={() => signIn("auth0")}
        >
          Auth0 ile Giriş Yap
        </button>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Hoş geldin, {session.user?.name}</h1>
          <a
            href="/protected"
            className="underline text-blue-600 hover:text-blue-800 mb-2"
          >
            Korumalı Alana Git
          </a>
          <button
            className="mt-4 px-6 py-2 rounded bg-gray-800 hover:bg-gray-900 text-white"
            onClick={() => signOut()}
          >
            Çıkış Yap
          </button>
        </>
      )}
    </main>
  );
}
