"use client";
import { cn } from "@/lib/utils";
import { type VideoHTMLAttributes, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  path: string;
  description: string;
}

export default function Video({ path, description, ...props }: VideoProps) {
  const vid = useRef<HTMLVideoElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  return (
    <div
      ref={ref}
      className={cn(
        `relative h-full w-full rounded overflow-hidden border`,
        !inView && `border-dashed border-red-500`
      )}
    >
      {inView ? (
        <video
          ref={vid}
          {...props}
          onClick={(e) => {
            e.preventDefault();
            if (vid.current?.paused) vid.current?.play();
            else vid.current?.pause();
          }}
        >
          <source src={path} type="video/mp4" />
          <meta itemProp="description" content={description} />
        </video>
      ) : (
        <div className="bg-neutral-200 w-full h-full animate-pulse" />
      )}
    </div>
  );
}
