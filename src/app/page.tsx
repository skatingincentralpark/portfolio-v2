import dynamic from "next/dynamic";

const ManyCircles = dynamic(() => import("@/components/ManyCircles"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <p className="max-w-lg">
          I’m a frontend developer based currently in Tokyo, Japan - creating
          solutions with web-based services. Currently focused on building
          robust, accessible UI with a strong emphasis on performance
          optimisation.
        </p>
        <ul>
          <li>
            <a
              href="mailto: charles.zhao5461@gmail.com"
              className="text-orange-400"
            >
              charles.zhao5461@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/skatingincentralpark/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/charleszhao1645/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <ManyCircles className="pointer-events-none fixed left-0 bottom-0 -translate-y-1/2 scale-150 sm:scale-100 sm:translate-y-0 sm:top-auto sm:relative md:h-[40rem] 3xl:fixed 3xl:p-4" />
    </div>
  );
}
