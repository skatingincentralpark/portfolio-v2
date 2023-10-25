"use client";
import { type VideoHTMLAttributes, useRef } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  path: string;
  description: string;
}

export default function Video({ path, description, ...props }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  return (
    <video
      ref={ref}
      {...props}
      onClick={() => {
        if (ref.current?.paused) ref.current?.play();
        else ref.current?.pause();
      }}
    >
      <source src={path} type="video/mp4" />
      <meta itemProp="description" content={description} />
    </video>
  );
}
