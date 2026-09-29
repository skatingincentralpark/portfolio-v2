import Video from "@/components/Video";
import { projects } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

// Minimal index of projects with each row's preview and description always
// visible. Collapses to a stacked layout below the xl breakpoint.
const columns =
  "xl:grid-cols-[4rem_minmax(0,2fr)_minmax(0,3fr)_minmax(0,2fr)_minmax(0,3fr)]";

export default function ProjectsIndexExpanded() {
  return (
    <div>
      <div
        className={`hidden xl:grid ${columns} gap-4 py-2 border-b border-black text-xs text-gray-500`}
      >
        <span>Year</span>
        <span>Project</span>
        <span>Description</span>
        <span>Stack</span>
        <span>Preview</span>
      </div>
      <ul>
        {projects.map((project) => {
          const portrait = project.videoOrientation === "portrait";

          return (
            <li
              key={project.title}
              className={`grid grid-cols-[4rem_minmax(0,1fr)] ${columns} items-start gap-x-4 gap-y-2 py-4 border-b border-gray-200`}
            >
              <span className="text-gray-500">{project.year}</span>
              <div className="flex flex-col gap-1">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium flex items-center gap-1 w-fit underline rounded px-1 -mx-1 hover:bg-violet-200 active:bg-violet-400"
                  >
                    {project.title}
                    <Link className="h-3 w-3 shrink-0" />
                  </a>
                ) : (
                  <span className="font-medium">{project.title}</span>
                )}
                <span className="text-gray-500">{project.category}</span>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gray-500 underline w-fit hover:text-black"
                  >
                    Source on GitHub
                  </a>
                )}
              </div>
              <p className="col-start-2 xl:col-start-auto">
                {project.description}
              </p>
              <span className="col-start-2 xl:col-start-auto text-xs text-gray-500">
                {project.technologies.join(", ")}
              </span>
              <div
                className={cn(
                  "col-start-2 xl:col-start-auto w-full max-w-md xl:max-w-none rounded",
                  !project.videoPath
                    ? "block aspect-[1900/1090] bg-gray-100"
                    : portrait
                      ? "flex justify-center aspect-[4/5] py-4 bg-neutral-800"
                      : "block p-3 bg-neutral-800"
                )}
              >
                {project.videoPath ? (
                  <div
                    className={cn(
                      portrait
                        ? "h-full aspect-[496/1080]"
                        : "w-full aspect-[1900/1090]"
                    )}
                  >
                    <Video
                      playsInline
                      autoPlay
                      muted
                      loop
                      className="h-full w-full object-cover"
                      path={project.videoPath}
                      // iPhone 17 Pro screen corners: 62pt on a 402x874pt
                      // display, as percentages so it scales with the video.
                      frameClassName={
                        portrait
                          ? "rounded-[15.42%_/_7.09%] border-0"
                          : "rounded-md border-0"
                      }
                      description={`Preview video for ${project.title}`}
                    />
                  </div>
                ) : (
                  <div className="h-full w-full flex justify-center items-center text-gray-400">
                    No preview
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
