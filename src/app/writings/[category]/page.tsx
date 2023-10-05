import { getAllPosts } from "@/lib/blog-utils";

export async function generateStaticParams() {
  const allPostCategories = getAllPosts(["title", "slug"]);
  const params = allPostCategories.map((category) => category.path);

  return params;
}

export default function Category() {
  return (
    <div className="max-w-md">Click on any of the links above to view</div>
  );
}
