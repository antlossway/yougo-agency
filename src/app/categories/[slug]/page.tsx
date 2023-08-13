import PostGrid from "@/components/(posts)/PostGrid";
import BackToList from "@/components/ui/BackToList";
import { getPostsByCategory } from "@/lib/wp-rest";
import React from "react";

const SingleCategory = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { posts, totalNumOfPost } = await getPostsByCategory(slug);
  if (!posts) return <p>Category `${slug}` has no articles</p>;

  return (
    <div className="wrapper mx-auto py-8 grid place-items-center gap-4">
      <h1 className="text-center text-3xl font-bold">#{slug}</h1>
      <span className="text-lg">(total {totalNumOfPost})</span>
      <div className="text-left">
        <BackToList />
      </div>

      <PostGrid posts={posts} totalNumOfPost={totalNumOfPost} />
    </div>
  );
};

export default SingleCategory;
