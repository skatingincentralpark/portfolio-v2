import "server-only";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { type Directory, type Post, validDirectories } from "@/types/blog";
import { notFound } from "next/navigation";

/** This returns all file names in a directory */
export function getContentSlugs(directory: string) {
  const fullDirectory = join(process.cwd(), `_content/${directory}`);
  return fs.readdirSync(fullDirectory);
}

export function getPostBySlug(
  slug: string,
  fields: (keyof Post)[] = [],
  directory: Directory
) {
  try {
    const realSlug = slug.replace(/\.md$/, "");
    const fullDirectory = join(process.cwd(), `_content/${directory}`);
    const fullPath = join(fullDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const items: Post = {};
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {
      if (field === "slug") {
        items[field] = realSlug;
      }
      if (field === "content") {
        items[field] = content;
      }
      if (typeof data[field] !== "undefined") {
        items[field] = data[field];
      }
    });

    return items;
  } catch (error) {
    notFound();
  }
}

export function assertDirectories(dir: string[]): asserts dir is Directory[];
export function assertDirectories(dir: string): asserts dir is Directory;
export function assertDirectories(dir: string | string[]): any {
  const validDirs = Object.values(validDirectories);

  if (typeof dir === "string") dir = [dir];

  if (!dir.every((directory) => validDirs.includes(directory))) notFound();
}

export function getAllPosts(fields: (keyof Post)[] = []) {
  const fullDirectory = join(process.cwd(), `_content`);

  const directories = fs
    .readdirSync(fullDirectory)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item)); // ignore hidden files

  assertDirectories(directories);

  const slugsArray = directories.map((directory) => ({
    name: directory,
    path: directory,
    paths: getContentSlugs(directory),
  }));

  const slugsArrayWithPosts = slugsArray.map((slugs) => ({
    name: slugs.name,
    path: slugs.path,
    posts: slugs.paths.map((slug) => getPostBySlug(slug, fields, slugs.path)),
  }));

  return slugsArrayWithPosts;
}
