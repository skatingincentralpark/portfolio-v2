"use client";
import { VideoHTMLAttributes, forwardRef, useState } from "react";

interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  path: string;
}

const Video = forwardRef<HTMLVideoElement, VideoProps>(
  ({ path, ...props }, ref) => {
    const [canPlay, setCanPlay] = useState(false);

    const className = `${props.className} ${
      canPlay ? "" : "bg-lime-200 animate-pulse"
    }`;

    return (
      <video
        ref={ref}
        {...props}
        onCanPlay={() => setCanPlay(true)}
        className={className}
      >
        <source src={path} type="video/mp4" />
      </video>
    );
  }
);

Video.displayName = "Video";

export default Video;
