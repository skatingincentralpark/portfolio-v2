import Video from "@/components/Video";
import { Link } from "lucide-react";

export default function Portfolio() {
  const activeClass = "hover:bg-violet-200 active:bg-violet-400 rounded";

  const disclaimerBg = {
    good: "bg-green-300",
    bad: "bg-red-200",
    neutral: "bg-yellow-200",
  };

  return (
    <div className="h-full">
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col border items-stretch border-gray-300 p-2 rounded gap-6 sm:flex-row sm:items-center shadow-lg"
          >
            <div className="border border-gray-300 rounded overflow-hidden flex-shrink-0 sm:w-1/3 aspect-[1900/1090]">
              {project.videoPath ? (
                <Video
                  playsInline
                  autoPlay
                  muted
                  loop
                  className="object-cover h-full w-full bg-gray-100"
                  path={project.videoPath}
                  description={`Preview video for ${project.title}`}
                />
              ) : (
                <div className="bg-gray-200 h-full w-full object-cover flex justify-center items-center text-gray-400">
                  No preview
                </div>
              )}
            </div>
            <div className="flex flex-col max-w-2xl p-2 pt-0 sm:p-0">
              <div className="flex gap-x-2 flex-wrap">
                <h2 className={`font-bold ${activeClass}`}>
                  <a
                    className="flex gap-1"
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                    <Link className="h-3 w-3" />
                  </a>
                </h2>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>

              <p className="text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex gap-1 ${project.github && activeClass} ${
                    !project.github &&
                    "cursor-not-allowed line-through text-red-500"
                  } w-fit text-green-500`}
                  aria-disabled={!project.github}
                >
                  {project.github ? "😸" : "😿"} Github{" "}
                  <Link className="h-3 w-3" />
                </a>
              </p>

              <p className="text-sm">✏️ {project.description}</p>
              <div className="flex flex-row my-2 flex-wrap gap-2">
                💿
                {project.technologies.map((tech) => (
                  <p
                    key={tech}
                    className="text-xs font-mono bg-gray-200 px-2 py-0.5 rounded-sm"
                  >
                    {tech}
                  </p>
                ))}
              </div>
              <p className="text-sm">⏰ {project.year}</p>
              {project.disclaimer && (
                <p
                  className={`text-xs mt-2 py-1 px-2 rounded border-t ${
                    disclaimerBg[project.disclaimer.status]
                  }`}
                >
                  {project.disclaimer.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const projects: {
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
    title: "SadFrogsStudying",
    category: "Locations Index",
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
    title: "Superhighway",
    category: "E-Commerce",
    description:
      "Pages revalidate when CMS content changes.  Be sure to check out the News and Lookbook pages.  All content is configurable via the CMS (Sanity).",
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
