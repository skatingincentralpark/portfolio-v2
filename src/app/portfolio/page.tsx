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
            className="flex flex-col border border-gray-300 p-2 rounded"
          >
            <div className="flex gap-2">
              <h2 className={`font-bold ${activeClass}`}>
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h2>
              <p className="text-sm text-gray-500">{project.category}</p>
            </div>
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
  image: string;
  url: string;
  year: number;
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
      "Accessible daily note-taking web app using lexical as the editor.",
    technologies: ["lexical", "emotion", "date-fns", "radix-ui"],
    image: "",
    url: "https://machen-v2.vercel.app/",
    year: 2023,
  },
  {
    title: "SadFrogsStudying",
    category: "Locations Index",
    description:
      "An index of beautiful places to study around the world.  User-submitted.",
    technologies: [
      "NextJS",
      "Prisma",
      "TRPC",
      "AWS S3",
      "React Query",
      "Google Maps",
      "tailwind",
    ],
    image: "",
    url: "https://sadfrogs-nextjs.vercel.app/",
    year: 2023,
  },
  {
    title: "Superhighway",
    category: "E-Commerce",
    description:
      "Pages revalidate when CMS content changes.  Be sure to check out the News and Lookbook pages.  All content is configurable via the CMS (Sanity).",
    technologies: ["NextJS", "Sanity", "SWR", "Framer Motion", "Shopify"],
    image: "/videos/portfolio/superhighway.mp4",
    url: "https://www.feverdream.faith/",
    year: 2022,
    disclaimer: {
      description:
        "Shopify plan has expired, site also in the process of a major refactor.",
      status: "bad",
    },
  },
  {
    title: "Machen",
    category: "Productivity App",
    description:
      "Allows you to create daily notes using DraftJS and save them to Firebase.",
    technologies: ["NextJS", "Firebase", "styled-components"],
    image: "",
    url: "https://machen.vercel.app/",
    year: 2021,
  },
  {
    title: "Videohead",
    category: "Video Portfolio",
    description:
      "Sanity CMS to manage video projects for a client and NextJS on the frontend.",
    technologies: ["NextJS", "Sanity CMS"],
    image: "",
    url: "https://www.videohead.com.au/work",
    year: 2022,
  },

  {
    title: "Goriot",
    category: "E-Commerce",
    description: "First Jamstack site.",
    technologies: ["Gatsby (React)", "Graphql", "Shopify"],
    image: "",
    url: "https://www.goriot.co/",
    year: 2021,
    disclaimer: {
      description: "Shopify plan has expired.",
      status: "neutral",
    },
  },
  {
    title: "Homeland",
    category: "Social Media App",
    description:
      "First MERN project - uses socket.io for real-time chat and notifications and Redux for global state.",
    technologies: ["MongoDB", "Express", "React", "Node"],
    image: "",
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
    image: "",
    url: "https://www.nuanhoart.com/",
    year: 2021,
  },
];
