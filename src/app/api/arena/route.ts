import { ArenaBlock, ArenaChannel } from "@/app/cool-interiors/page";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(): Promise<NextResponse> {
  const res = await fetch(
    `https://api.are.na/v2/search/channels/anything-that-looks-cool?subject=blocks`
  );

  const data: ArenaChannel = await res.json();

  const arenaBlocks: ArenaBlock[] = data.blocks.map((block) => ({
    description: block.description,
    createdAt: block.created_at,
    title: block.title,
    srcLarge: block.image.large.url,
  }));

  return NextResponse.json(arenaBlocks);
}
