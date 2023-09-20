import Image from "next/image";
import charlieBrown from "../../public/charlie.png";
import billEvans from "../../public/bill.png";

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
      <Image
        className="w-72 mt-auto"
        src={billEvans}
        alt="bill evans"
        quality={100}
      />
    </div>
  );
}
