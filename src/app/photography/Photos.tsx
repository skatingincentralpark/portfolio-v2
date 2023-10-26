"use client";

import useDebounce from "@/hooks/useDebounce";
import { type SanityImage } from "@/utils/getPhotos";
import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const RENDER_AMOUNT = 16;

export default function Photos({ photos }: { photos: SanityImage[] }) {
  const [amountOfPhotosToRender, setAmountOfPhotosToRender] =
    useState(RENDER_AMOUNT);
  const { ref } = useInView({
    rootMargin: "100px",
    onChange: (inView) => {
      if (inView) {
        showMorePhotos();
        console.log("getting more");
      }
    },
  });

  const showMorePhotos = useDebounce(() => {
    if (photos.length <= amountOfPhotosToRender) return;
    void setAmountOfPhotosToRender(amountOfPhotosToRender + RENDER_AMOUNT);
  }, 400);

  const photosToRender = photos.slice(0, amountOfPhotosToRender);

  return (
    <div className="grid grid-cols-3 md:grid-cols-4">
      {photosToRender.map((x, i) => {
        return <Photo {...x} index={i} key={x._key} />;
      })}

      <div ref={ref} />
    </div>
  );
}

interface PhotoProps extends SanityImage {
  index: number;
}

function Photo({
  url,
  width,
  height,
  caption,
  dominantColor,
  index,
}: PhotoProps) {
  const backgroundColor = dominantColor;

  // delay every photo by 100ms
  // restart at 0 after RENDER_AMOUNT photos
  const delay = (index % RENDER_AMOUNT) * 200;
  const animationDelay = `${delay}ms`;
  const priority = index <= RENDER_AMOUNT / 2;

  return (
    <div key={url} style={{ backgroundColor }} className="relative">
      <Image
        className="animate-fade-in"
        priority={priority}
        src={url}
        width={width}
        height={height}
        style={{
          animationDelay,
        }}
        alt={caption || "Some photo I took"}
        sizes="(max-width: 768px) 25vw, 33vw"
      />
    </div>
  );
}
