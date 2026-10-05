"use client";

import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-x-hidden">
      <main className="flex-1 flex flex-col items-center justify-center pt-40 pb-20 px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-9xl font-black text-[#C8FF00] tracking-tighter mb-4">
            Wrong turn.
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-zinc-100 mb-2">
            Looks like you've ended up somewhere that doesn't exist.
          </h2>

          <p className="text-zinc-500 text-base md:text-lg max-w-sm mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-row gap-4">
            <Link
              href="/"
              className="bg-linear-to-br from-[#C8FF00] via-[#C8FF00] to-[#C8FF00] px-8 py-3 rounded-full text-sm font-bold text-black transition-all active:scale-95 whitespace-nowrap"
            >
              Go Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 rounded-full text-sm font-bold text-zinc-400 border border-zinc-800 hover:text-white transition-all bg-zinc-950/50 whitespace-nowrap"
            >
              Go Back
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;