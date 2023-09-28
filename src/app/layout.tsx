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

  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen`}>
        <header className="flex gap-4 font-light text-sm p-4 fixed top-0 left-0 z-20 bg-white w-full items-center overflow-scroll">
          <Link href="/" className={`font-bold `}>
            Charlie <span className="hidden xs:inline">Zhao</span>
          </Link>
          <nav className="flex gap-4">
            <Link className={`${activeClass}`} href="/portfolio">
              Portfolio
            </Link>
            <Link className={`${activeClass}`} href="/writings">
              Writings
            </Link>
            <Link className={`${activeClass}`} href="/cool-interiors">
              Interiors
            </Link>
          </nav>
        </header>
        <main className="font-light text-sm p-4 pt-14">{children}</main>
      </body>
    </html>
  );
}
