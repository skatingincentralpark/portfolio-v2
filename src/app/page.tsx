import dynamic from "next/dynamic";

const ManyCircles = dynamic(() => import("@/components/ManyCircles"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-4 md:flex-row md:gap-8">
        <p className="max-w-lg">
          I’m a software engineer based in Sydney, Australia. Creating solutions
          with web-based services. Currently focused on building accessible,
          performant UI and exploring scalable architecture.
        </p>
        <ul>
          <li>charles.zhao5461@gmail.com</li>
          <li>CV</li>
          <li>LinkedIn</li>
          <li>read.cv</li>
        </ul>
      </div>
      <ManyCircles className="pointer-events-none fixed left-0 bottom-0 -translate-y-1/2 scale-150 sm:scale-100 sm:translate-y-0 sm:top-auto sm:relative" />
    </div>
  );
}
