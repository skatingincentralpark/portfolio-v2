import AnimeJs2 from "@/components/Animejs2";
import { getAllPosts } from "@/lib/blog-utils";
import Link from "next/link";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const allPostCategories = getAllPosts(["title", "slug"]);
  const activeClass = "hover:bg-lime-200 active:bg-lime-400 rounded px-1";

  return (
    <div className="space-y-4">
      <div className="flex gap-4 border-y border-black py-4 flex-col sm:flex-row">
        {allPostCategories.map((category) => (
          <div key={category.path}>
            <div>
              <span className="capitalize font-bold">{category.path}</span>{" "}
              <span>{category.posts.length}</span>
            </div>
            <div className="flex flex-col">
              {category.posts.map((post) => (
                <Link
                  key={post.slug}
                  as={`/writings/${category.path}/${post.slug}`}
                  href={`/writings/${category.path}/${post.slug}`}
                  className={activeClass}
                >
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <AnimeJs2 className="ml-auto w-20 h-auto sm:w-auto aspect-1" />
      </div>
      <div>{children}</div>
    </div>
  );
}
