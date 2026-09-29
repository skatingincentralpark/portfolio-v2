"use client";
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react";
import { type VideoHTMLAttributes, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  path: string;
  description: string;
  // Classes for the outer frame (the <video> itself takes `className`).
  frameClassName?: string;
}

export default function Video({
  path,
  description,
  frameClassName,
  ...props
}: VideoProps) {
  const vid = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(!props.autoPlay);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });

  // Autoplay can be blocked (e.g. low power mode) without a pause event, so
  // confirm it actually started or the overlay would show the wrong icon.
  const { autoPlay } = props;
  useEffect(() => {
    if (inView && autoPlay) vid.current?.play().catch(() => setPaused(true));
  }, [inView, autoPlay]);

  return (
    <div
      ref={ref}
      className={cn(
        `group/video relative h-full w-full rounded overflow-hidden border`,
        !inView && `border-dashed border-red-500`,
        frameClassName
      )}
    >
      {inView ? (
        <>
          <video
            ref={vid}
            {...props}
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onClick={(e) => {
              e.preventDefault();
              if (vid.current?.paused) vid.current?.play();
              else vid.current?.pause();
            }}
          >
            <source src={path} type="video/mp4" />
            <meta itemProp="description" content={description} />
          </video>
          {/* Clicking toggles playback, so hint at it on hover; stay visible
              while paused so it's clear the video can be resumed. */}
          <div
            className={cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity",
              paused ? "opacity-100" : "opacity-0 group-hover/video:opacity-100"
            )}
          >
            {/* Shrinks while pressed, then the key change remounts it so it
                pops back in with the new icon. */}
            <span
              key={String(paused)}
              className="rounded-full bg-white/90 p-3 shadow transition-transform duration-150 group-active/video:scale-90 animate-in zoom-in-90"
            >
              {paused ? (
                <Play className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Pause className="h-4 w-4" strokeWidth={1.5} />
              )}
            </span>
          </div>
        </>
      ) : (
        <div className="bg-neutral-200 w-full h-full animate-pulse" />
      )}
    </div>
  );
}
