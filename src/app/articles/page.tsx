import { getAllPosts, getCategories } from "@/lib/wp-rest";
import React from "react";
import { postcardType } from "../../../data";
import PostCard from "@/components/(posts)/PostCard";
import Link from "next/link";

export default async function posts() {
  const { posts, totalNumOfPost, categoryArray } = await getAllPosts();

  // console.log(categoryArray);

  // console.log(posts, totalNumOfPost);
  return (
    <div className="wrapper mx-auto py-8 grid place-items-center gap-4">
      <h1 className="text-center text-3xl font-bold">Articles</h1>
      <span className="text-lg">(total {totalNumOfPost})</span>

      {/* categories */}
      <ul className="flex gap-4">
        {categoryArray.map((cat) => (
          <li key={cat.id}>
            <Link href={`/categories/${cat.slug}`} className="hover:underline">
              {cat.slug}
            </Link>
          </li>
        ))}
      </ul>

      {/* grid of article card */}
      <div className="mx-auto grid grid-cols-12 gap-4 sm:gap-10">
        {posts.map((post: postcardType) => (
          <div
            key={post.slug}
            className="max-w-xs sm:max-w-none col-span-full sm:col-span-6 lg:col-span-4 xl:col-span-3"
          >
            <PostCard key={post.slug} post={post} />
          </div>
        ))}
      </div>
    </div>
  );
}
