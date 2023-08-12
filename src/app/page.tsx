import Hero from "@/components/Hero";
import Image from "next/image";
import Slider from "@/components/Slider";
import CTA from "@/components/ui/CTA";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar textColor="text-white" />
      {/* hero */}
      <Slider />

      {/* introduction, margin-top 100vh because the slider above is absolute position */}
      <section
        className="mt-[100vh] container dark:bg-black dark:text-white
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
    </div>
  );
}
