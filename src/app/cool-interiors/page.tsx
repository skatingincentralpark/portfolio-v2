import Image from "next/image";

interface ArenaBlock {
  src: string;
  description: string;
  source: Source | null;
  createdAt: Date;
  title: string;
  srcLarge: string;
}

const CoolInteriorsPage = async () => {
  const res = await fetch(
    `https://api.are.na/v2/search/channels/anything-that-looks-cool?subject=blocks`
  );

  const data: ArenaChannel = await res.json();

  const arenaBlocks: ArenaBlock[] = data.blocks.map((block) => ({
    src: block.image.original.url,
    description: block.description,
    source: block.source,
    createdAt: block.created_at,
    title: block.title,
    srcLarge: block.image.large.url,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {arenaBlocks.map((block) => (
        <div key={block.src} className="relative aspect-square">
          <Image
            objectFit="contain"
            className="w-full h-full"
            src={block.srcLarge}
            alt=""
            fill
            sizes="(max-width: 768px) 80vw, 28vw"
          />
        </div>
      ))}
    </div>
  );
};
export default CoolInteriorsPage;

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
