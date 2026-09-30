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

export default function Video({ path, description, frameClassName, ...props }: VideoProps) {
  const vid = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(!props.autoPlay);
  const [loaded, setLoaded] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,
    // Start loading about a screen before the video scrolls into view so it's
    // ready by the time it's visible. Vertical only: a horizontal inset would
    // hide narrow videos near the right edge (e.g. the phone preview beside a
    // web video) from the observer entirely, so they'd never load.
    rootMargin: "100% 0px",
  });

  // Autoplay can be blocked (e.g. low power mode) without a pause event, so
  // confirm it actually started or the overlay would show the wrong icon.
  const { autoPlay } = props;
  useEffect(() => {
    if (inView && autoPlay) vid.current?.play().catch(() => setPaused(true));
  }, [inView, autoPlay]);

  // A cached video can finish loading before React attaches onLoadedData.
  useEffect(() => {
    if (inView && (vid.current?.readyState ?? 0) >= 2) setLoaded(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={cn(
        `group/video relative h-full w-full rounded overflow-hidden border`,
        !inView && `border-dashed border-red-500`,
        frameClassName,
      )}
    >
      {/* Skeleton stays underneath until the video's first frame is ready,
          then the video fades in over it. */}
      {!loaded && <div className="absolute inset-0 bg-neutral-200 animate-pulse" />}
      {inView && (
        <>
          {/* Silent project demos, so there's nothing to caption. */}
          {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            ref={vid}
            {...props}
            className={cn(
              "relative cursor-pointer transition-opacity duration-500",
              loaded ? "opacity-100" : "opacity-0",
              props.className,
            )}
            onLoadedData={() => setLoaded(true)}
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
              !loaded
                ? "opacity-0"
                : paused
                  ? "opacity-100"
                  : "opacity-0 group-hover/video:opacity-100",
            )}
          >
            {/* Shrinks while pressed, then the key change remounts it so it
                pops back in with the new icon. */}
            <span
              key={String(paused)}
              className="rounded-full bg-white/90 p-3 shadow-sm transition-transform duration-150 group-active/video:scale-90 animate-in zoom-in-90"
            >
              {paused ? (
                <Play className="h-4 w-4" strokeWidth={1.5} />
              ) : (
                <Pause className="h-4 w-4" strokeWidth={1.5} />
              )}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
