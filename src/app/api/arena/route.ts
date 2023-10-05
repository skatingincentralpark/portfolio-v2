import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export interface ArenaBlock {
  description: string;
  createdAt: Date;
  title: string;
  srcLarge: string;
}

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

interface ArenaChannel {
  blocks: Block[];
}

interface Block {
  id: number;
  title: string;
  updated_at: Date;
  created_at: Date;
  description: string;
  source: Source | null;
  image: ArenaImage;
}

interface ArenaImage {
  filename: string;
  updated_at: Date;
  thumb: Display;
  square: Display;
  display: Display;
  large: Display;
  original: Original;
}

interface Display {
  url: string;
}

interface Original {
  url: string;
  file_size: number;
  file_size_display: string;
}

interface Source {
  url: string;
  title: null | string;
  provider: Provider;
}

interface Provider {
  name: string;
  url: string;
}
