import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charlie Zhao",
  description: "Portfolio of Charlie Zhao",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const activeClass = "hover:bg-violet-200 active:bg-violet-400 rounded px-1";
  const links = [
    { href: "/portfolio", label: "Portfolio" },
    { href: "/photography", label: "Photography" },
    { href: "/writings", label: "Writings" },
    { href: "/cool-interiors", label: "Interiors" },
  ];
  const gradientStyle = {
    background: "-webkit-linear-gradient(left,hsla(0,0%,100%,0),#fff)",
  };

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <header className="font-light text-sm px-4 sticky top-0 left-0 z-20 bg-white w-full">
          <div className="flex gap-4 py-4 items-center overflow-scroll">
            <Link href="/" className={`font-bold `}>
              Charlie <span className="hidden xs:inline">Zhao</span>
            </Link>
            <nav className="flex gap-4">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} className={`${activeClass}`}>
                  {label}
                </Link>
              ))}
            </nav>
            <div
              className="w-32 h-full absolute top-0 right-0 pointer-events-none"
              style={gradientStyle}
            />
          </div>
        </header>
        <main className="font-light text-sm px-4">{children}</main>
      </body>
    </html>
  );
}
