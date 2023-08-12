import { getCategories, getSinglePost } from "@/lib/wp-rest";
import React from "react";
import parseHTML from "html-react-parser";
import BackToList from "@/components/ui/BackToList";

export default async function singlePost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const post = await getSinglePost(slug);
  if (!post) return <p>post does not exists</p>;
  const categoryMap = await getCategories(); //Map type, 1:'lifestyle', 7:'education'....

  return (
    <div className="wrapper py-10">
      <article className="p-4 prose prose-base md:prose-lg prose-slate dark:prose-invert prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline">
        <h1>{post.title}</h1>
        <span>{categoryMap.get(post.category)}</span>
        {parseHTML(post.content)}
      </article>
      <BackToList />
    </div>
  );
}
