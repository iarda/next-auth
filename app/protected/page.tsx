"use client";
import { useSession, signOut } from "next-auth/react";

export default function ProtectedPage() {
  const { data: session } = useSession();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Korumalı Alan</h1>
      <p className="mb-2">Hoş geldin, {session?.user?.name}</p>
      <button
        className="mt-4 px-6 py-2 rounded bg-gray-800 hover:bg-gray-900 text-white"
        onClick={() => signOut()}
      >
        Çıkış Yap
      </button>
    </main>
  );
}
