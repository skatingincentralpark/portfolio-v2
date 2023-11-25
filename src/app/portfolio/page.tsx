import Video from "@/components/Video";
import { projects } from "@/lib/constants";
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
            <a
              className="flex-shrink-0 sm:w-1/3 aspect-[1900/1090]"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
            <div className="flex flex-col max-w-2xl p-2 pt-0 sm:p-0">
              <div className="flex gap-x-2 flex-wrap">
                <h2 className={`font-bold underline ${activeClass}`}>
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
                    "cursor-not-allowed line-through text-neutral-500"
                  } w-fit text-green-500 underline`}
                  aria-disabled={!project.github}
                >
                  {project.github ? "😸 Github" : "😿 Github Private"}
                  {project.github && <Link className="h-3 w-3" />}
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
