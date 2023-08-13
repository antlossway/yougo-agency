import { getCategories, getSinglePost } from "@/lib/wp-rest";
import React from "react";
import parseHTML from "html-react-parser";
import BackToList from "@/components/ui/BackToList";
import Link from "next/link";

export default async function singlePost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getSinglePost(slug);
  if (!post) return <p>post does not exists</p>;

  return (
    <div className="wrapper py-10">
      <article className="p-4 prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <h1>{post.title}</h1>
        <BackToList />

        <Link href={`/categories/${post.category}`}>
          <span className="ml-5">#{post.category}</span>
        </Link>

        {parseHTML(post.content)}
      </article>
    </div>
  );
}
