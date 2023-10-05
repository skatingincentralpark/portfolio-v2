import Image from "next/image";
import { ArenaBlock } from "@/app/api/arena/route";

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
