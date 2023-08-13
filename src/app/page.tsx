import Hero from "@/components/Hero";
import Image from "next/image";
import Slider from "@/components/Slider";
import CTA from "@/components/ui/CTA";
import Navbar from "@/components/Navbar";
import { getCategories, getRecentPosts } from "@/lib/wp-rest";
import PostCard from "@/components/(posts)/PostCard";
import { postcardType } from "../../data";

export default async function Home() {
  const posts = await getRecentPosts(10);
  const categoryMap = await getCategories(); //Map type, 1:'lifestyle', 7:'education'....

  return (
    <div>
      {/* hero */}
      <Slider />
      <div className="absolute top-0 left-0 w-full">
        <Navbar textStyle="text-white" />
      </div>

      {/* introduction*/}
      <section
        className=" container dark:bg-black dark:text-white
      "
      >
        <div className="wrapper h-full py-10">
          <div className=" max-w-[1024px] mx-auto">
            <h2 className="text-clamp-hero-h1 leading-tight font-bold mb-6">
              So, you want an escape.
              <br />
              But, there are many questions to be answered.
            </h2>

            <ul className="text-2xl font-medium mb-6 flex flex-col gap-2">
              <li>How can I support myself financially?</li>
              <li>What visa do I need?</li>
              <li>What about medical insurance? </li>
              <li>How much tax will I pay?</li>
            </ul>

            <p className="text-3xl font-semibold">
              Yes, above are all valid questions and you should prepare yourself
              well before departure.
            </p>
            <div className="mt-6">
              <CTA
                text="Learn More"
                textStyle="text-2xl font-semibold text-white"
                url="/about"
              />
            </div>
          </div>
        </div>
      </section>

      {/* recent post */}
      <div className="wrapper mx-auto py-8 grid place-items-center gap-4">
        <h1 className="text-center text-3xl font-bold">Recent Articles</h1>

        {/* grid of article card */}
        <div className="w-full mx-auto grid grid-cols-12 gap-4 sm:gap-10">
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
    </div>
  );
}
