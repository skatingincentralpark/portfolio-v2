import {
  assertDirectories,
  getAllPosts,
  getPostBySlug,
} from "@/lib/blog-utils";
import markdownToHtml from "@/lib/markdown-to-html";
import { type Post } from "@/types/blog";

interface Params {
  category: string;
  slug: string;
}

export async function generateStaticParams() {
  const allPostCategories = getAllPosts(["title", "slug"]);
  const params = allPostCategories.flatMap((category) =>
    category.posts.map((post) => post.slug)
  );

  return params;
}

export default async function WritingsIndividual({
  params,
}: {
  params: Params;
}) {
  async function getPost(params: Params): Promise<Post | undefined> {
    assertDirectories(params.category);

    const post = getPostBySlug(
      params.slug,
      ["title", "slug", "content"],
      params.category
    );

    const content = await markdownToHtml(post.content || "");

    return { ...post, content: content };
  }

  const post = await getPost(params);

  return (
    <div className="h-full">
      {/* <div className="px-2 py-1 rounded flex gap-2 items-center bg-gradient-to-r from-lime-400 mb-2">
        {params.category} / {params.slug}
      </div> */}
      <>
        {post?.content && (
          <article
            className={`
            prose prose-slate
            prose-sm

            prose-h1:text-sm
            
            prose-h2:text-sm

            prose-p:text-sm

            prose-blockquote:font-light
            prose-blockquote:not-italic
            prose-blockquote:border-l
            prose-blockquote:border-black

            prose-li:m-0
            prose-li:text-sm

            max-w-md
            `}
            dangerouslySetInnerHTML={{ __html: post?.content }}
          />
        )}
      </>
    </div>
  );
}
