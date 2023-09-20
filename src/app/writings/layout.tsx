import AnimeJs2 from "@/components/animejs2";
import Link from "next/link";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <div className="flex gap-4 border-y border-black py-4 flex-col sm:flex-row">
        <div className="flex flex-col">
          <div className="font-bold">Book Notes</div>
          <Link href="/writings/test-1">Friendship</Link>
          <Link href="/writings/test-1">The Essence Of Success</Link>
          <Link href="/writings/test-1">Meditations</Link>
          <Link href="/writings/test-1">Book Of Five Rings</Link>
          <Link href="/writings/test-1">Mastery</Link>
          <Link href="/writings/test-1">Leadership Strategy And Tactics</Link>
        </div>
        <div className="flex flex-col">
          <div className="font-bold">Software Notes</div>
          <Link href="/writings/bla">Optimising my web app</Link>
          <Link href="/writings/bla">Heavily reduce {"<img>"} payloads</Link>
        </div>
        <AnimeJs2 className="ml-auto w-20 h-auto sm:w-auto aspect-1" />
      </div>
      <div>{children}</div>
    </div>
  );
}
