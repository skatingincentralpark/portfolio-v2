export const projects: {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  videoPath: string;
  url: string;
  year: number;
  github?: string;
  disabled?: boolean;
  disclaimer?: {
    description: string;
    status: "good" | "bad" | "neutral";
  };
}[] = [
  {
    title: "InternationalStudySpots",
    category: "Study Spot Sharing Site",
    description:
      "Rebuilding with new design, improved component / server architecture and integration / E2E testing.",
    technologies: [
      "NextJS",
      "Prisma",
      "Jest",
      "TRPC",
      "AWS S3",
      "React Query",
      "Google Maps",
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
    title: "Machen",
    category: "Productivity App",
    description:
      "Allows you to create daily notes using DraftJS and save them to Firebase.",
    technologies: ["NextJS", "Firebase", "styled-components"],
    videoPath: "",
    url: "https://machen.vercel.app/",
    year: 2021,
    github: "https://github.com/skatingincentralpark/machen",
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
    videoPath: "",
    url: "https://www.goriot.co/",
    year: 2021,
    disclaimer: {
      description: "Shopify plan has expired.",
      status: "neutral",
    },
    github: "https://github.com/skatingincentralpark/goriot-website",
  },
  {
    title: "Homeland",
    category: "Social Media App",
    description:
      "First MERN project - uses socket.io for real-time chat and notifications and Redux for global state.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    videoPath: "",
    url: "https://homeland-v1.herokuapp.com/",
    year: 2021,
    disabled: true,
    disclaimer: {
      description:
        "After Heroku's free tier expired, it's no longer active.  I may remake and redeploy it in the future.",
      status: "bad",
    },
    github: "https://github.com/skatingincentralpark/Homeland",
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
