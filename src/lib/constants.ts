export const projects: {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  videoPath: string;
  // Phone recordings are portrait; everything else is a 16:9 screen capture.
  videoOrientation?: "portrait";
  url?: string;
  year: number;
  github?: string;
  disabled?: boolean;
  disclaimer?: {
    description: string;
    status: "good" | "bad" | "neutral";
  };
}[] = [
  {
    title: "Jimoto",
    category: "Community Platform",
    description:
      "Community super-app for Japanese speakers in Australia: a visa-aware jobs board, share-houses, marketplace, business directory, events and a map.  Web and mobile apps share one Convex backend, with realtime in-app messaging and moderation tools to keep scams out.",
    technologies: [
      "Convex",
      "TanStack Start",
      "React 19",
      "Better Auth",
      "Cloudflare Workers",
      "Expo",
      "tailwind",
      "MapLibre",
      "Vitest",
      "Playwright",
    ],
    videoPath: "/videos/jimoto.mp4",
    url: "https://community-convex-web.charles-zhao5461.workers.dev/",
    year: 2026,
  },
  {
    title: "Simple Workout",
    category: "iOS Fitness App",
    description:
      "Native iOS strength-training app, built interaction-first.  A custom slide-up sheet morphs from a floating card to fullscreen on one device-tuned spring, sets are logged on a custom keypad with haptics and RPE controls, and exercises are reordered or grouped into supersets by dragging.  Runs on mock data for now; persistence and history come next as it grows into a full app.",
    technologies: [
      "SwiftUI",
      "UIKit",
      "AVFoundation",
      "MetalKit",
      "XCTest",
      "Maestro",
    ],
    videoPath: "/videos/simpleworkout.mp4",
    videoOrientation: "portrait",
    year: 2026,
  },
  {
    title: "InternationalStudySpots",
    category: "Study Spot Sharing Site",
    description:
      "An index of beautiful places to study around the world, rebuilt from SadFrogsStudying.  Images upload straight from the browser to S3 via presigned URLs, and pages are statically cached and only revalidated when a spot is created, edited or deleted.",
    technologies: [
      "NextJS",
      "TRPC",
      "Prisma",
      "React Query",
      "NextAuth",
      "AWS S3",
      "Zod",
      "Leaflet",
      "Jest",
      "tailwind",
    ],
    videoPath: "/videos/internationalstudyspots.mp4",
    url: "https://internationalstudyspots.vercel.app/",
    year: 2023,
    disclaimer: {
      status: "good",
      description:
        "WIP V2 of SadFrogsStudying, you can find that project below.",
    },
    github: "https://github.com/sadfrogstudying/internationalstudyspots",
  },
  {
    title: "Superhighway",
    category: "E-Commerce",
    description:
      "Pages revalidate when CMS content changes.  Be sure to check out the News and Lookbook pages.  All content is configurable via the CMS (Sanity). Animations using Framer Motion.",
    technologies: ["NextJS", "Sanity", "SWR", "Framer Motion", "Shopify"],
    videoPath: "/videos/superhighway.mp4",
    url: "https://www.feverdream.faith/",
    year: 2022,
    disclaimer: {
      description: "Pending to be rebuilt.",
      status: "neutral",
    },
    github: "https://github.com/skatingincentralpark/combat-site",
  },
  {
    title: "SadFrogsStudying",
    category: "Study Spot Sharing Site",
    description:
      "An index of beautiful places to study around the world.  User-submitted.  Big form and client/server validation with zod.  Implements Google Maps API, statically generates map pages, and uses NextJS's ISR to revalidate pages when new locations are added, to save API costs.  Implements pending edits where an admin has to confirm any edits.",
    technologies: [
      "NextJS",
      "Prisma",
      "TRPC",
      "AWS S3",
      "React Query",
      "Google Maps",
      "tailwind",
    ],
    videoPath: "/videos/sadfrogs.mp4",
    url: "https://sadfrogs-nextjs.vercel.app/",
    year: 2023,
    github: "https://github.com/sadfrogstudying/sadfrogs-nextjs",
  },
  {
    title: "MachenV2",
    category: "Notes App",
    description:
      "Accessible daily note-taking web app using lexical as the editor. date-fns to handle most date functionality.  Tested with react-testing-library.",
    technologies: [
      "lexical",
      "emotion",
      "date-fns",
      "radix-ui",
      "react-testing-library",
      "jest",
    ],
    videoPath: "/videos/machenv2.mp4",
    url: "https://machen-v2.vercel.app/",
    year: 2023,
    github: "https://github.com/skatingincentralpark/machen-v2",
  },
  {
    title: "Videohead",
    category: "Video Portfolio",
    description:
      "Sanity CMS to manage video projects for a client and NextJS on the frontend.",
    technologies: ["NextJS", "Sanity CMS"],
    videoPath: "",
    url: "https://www.videohead.com.au/work",
    year: 2022,
  },

  {
    title: "Goriot",
    category: "E-Commerce",
    description: "First Jamstack site.",
    technologies: ["Gatsby (React)", "Graphql", "Shopify"],
    videoPath: "/videos/goriot.mp4",
    url: "https://onprinciple.netlify.app/",
    year: 2021,
    disclaimer: {
      description: "Shopify plan has expired.",
      status: "neutral",
    },
    github: "https://github.com/skatingincentralpark/goriot-website",
  },
  {
    title: "Nuan Ho Art",
    category: "Portfolio",
    description:
      "A portfolio site I designed and developed for Sydney-based artist, Nuan Ho.",
    technologies: ["Gatsby (React)", "Graphql", "NetlifyCMS"],
    videoPath: "",
    url: "https://www.nuanhoart.com/",
    year: 2021,
  },
];
