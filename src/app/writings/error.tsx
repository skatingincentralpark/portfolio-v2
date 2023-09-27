"use client";
import CharlieBrownImage from "@/components/CharlieBrownImage";

// Error components must be Client Components

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-red-500">
      <div>Error: {error.message}</div>
      <CharlieBrownImage />
    </div>
  );
}
