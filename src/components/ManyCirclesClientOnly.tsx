"use client";

import dynamic from "next/dynamic";

// `ssr: false` is only allowed inside Client Components.
const ManyCircles = dynamic(() => import("@/components/ManyCircles"), {
  ssr: false,
});

export default ManyCircles;
