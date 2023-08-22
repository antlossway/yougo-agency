import Navbar from "@/components/Navbar";
import ShareSocialMedia from "@/components/ShareSocialMedia";
import Highlight from "@/components/ui/Highlight";
import { getCountryGuide } from "@/lib/wp-rest";
import parseHTML from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

// mysite.com/countries/thailand
//reference: https://nextjs.org/docs/app/api-reference/file-conventions/page
const CountryInfo = async ({ params }: { params: { countryName: string } }) => {
  const { countryName } = params;

  const { article, infos, topics, featuredImgUrl } = await getCountryGuide(
    countryName
  );

  // console.log("received:", infos);

  return (
    <>
      {/* featured image cover the full screen */}
      {/* <div className="absolute top-0 left-0 -z-10 w-full h-screen"> */}
      <div className="w-full h-screen relative isolate">
        <Image
          src={featuredImgUrl}
          alt="image of thailand"
          fill
          className="-z-10 object-cover"
        />

        {/* navbar on top of fullscreen image */}
        <div className="absolute top-0 left-0 w-full">
          <Navbar textStyle="text-white" />
        </div>

        {/* highlight of country on top of fullscreen image */}
        <Highlight
          title="Thailand"
          subtitle="Luxury Living in the Land of Smiles"
          position="inset-0 m-auto "
        />
      </div>

      {/* article */}
      {/* <div
        className="mt-[100vh] wrapper py-10
      dark:bg-black
    grid place-content-center "
      > */}
      <div
        className="wrapper py-10
      dark:bg-black
    grid place-content-center "
      >
        {/* relative for the sticky postion of Table of content */}
        <div className="relative flex gap-4">
          <article
            className="flex-1 prose prose-base dark:prose-invert md:prose-lg prose-slate  prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline
       "
          >
            {parseHTML(article)}

            {/* infos */}
            {/* each info is an array ['visa','visa options'] */}
            {infos.map((info, index) => (
              <section key={index} id={info[0]}>
                {parseHTML(info[1])}
              </section>
            ))}
          </article>

          {/* table of content */}
          <div
            className="hidden sticky top-0  right-[5vw] md:flex w-[200px] h-[800px] p-8
         flex-col gap-4
      border border-green-400"
          >
            {/* share to social media */}
            <ShareSocialMedia />
            <h4 className="text-xl font-semibold">Table of Content</h4>
            {topics.map((topic) => (
              <Link href={`/countries/${countryName}#${topic}`} key={topic}>
                <span className="capitalize text-lg">
                  {topic.replace(/_/g, " ")}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryInfo;
