import { cache } from "react";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_STUDIO_API_DATASET, // or the name you chose in step 1
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: "2023-05-03", // use current date (YYYY-MM-DD) to target the latest API version
});

export interface SanityImage {
  _key: string;
  caption: string;
  url: string;
  height: number;
  width: number;
  aspectRatio: number;
  lqip?: string;
  blurHash?: string;
  dominantColor?: string;
}

export const revalidate = 3600 * 24 * 30;

export const getPhotos = cache(async () => {
  const images = await client.fetch<SanityImage[]>(
    `
    *[_type == "portfolioImages"] {
      images[] {
          _key,
          caption,
          "url": asset -> url,
          "height": asset -> metadata.dimensions.height,
          "width": asset -> metadata.dimensions.width,
          "aspectRatio": asset -> metadata.dimensions.aspectRatio,
          "lqip": asset -> metadata.lqip,
          "blurHash": asset -> metadata.blurHash,
          "dominantColor": asset -> metadata.palette.dominant.background,
      }
    }[0].images
    `
  );

  return images;
});
