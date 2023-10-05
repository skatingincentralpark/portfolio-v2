import Image from "next/image";

export interface ArenaBlock {
  description: string;
  createdAt: Date;
  title: string;
  srcLarge: string;
}

const CoolInteriorsPage = async () => {
  const domain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://www.charliezhao.com";
  const res = await fetch(`${domain}/api/arena`);
  const arenaBlocks: ArenaBlock[] = await res.json();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {arenaBlocks.map((block, i) => (
        <div key={block.srcLarge} className="relative aspect-square">
          <Image
            priority={i < 6}
            className="w-full h-full object-contain"
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

export interface ArenaChannel {
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
