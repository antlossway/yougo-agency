// hero image as image div

import Image from "next/image";
import Link from "next/link";

type sliderProps = {
  id: number;
  image: string;
  alt: string;
  subject?: string;
  line1?: string;
  line2?: string;
  line3?: string;
  link?: string;
};
const SliderItem = ({
  id,
  image,
  alt,
  subject,
  line1,
  line2,
  line3,
  link,
}: sliderProps) => {
  // h-[calc(100vh-4rem)]
  return (
    <section
      className="w-screen h-screen relative isolate
      bg-gradient-to-r from-gray-800/50 to-amber-900/30
      "
    >
      {/* hero image */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="-z-10 object-cover object-center mix-blend-multiply opacity-80 "
      />

      {/* <div
        className=" relative h-[400px] md:h-full md:w-[40%] p-10
        grid place-content-center
         after:absolute after:-z-10 after:content-[''] after:inset-0 after:bg-hero-overlay/80 after:mix-blend-multiply "
      > */}

      {/* highlight box with white border */}
      <div
        className=" absolute left-0 right-0 mx-auto top-[20vh] h-[320px] w-[320px]
        md:h-[350px] md:w-[350px]
        border-8 border-white/80
        p-10
        grid place-content-center
         after:absolute after:-z-10 after:content-[''] after:inset-0 after:bg-hero-overlay/70 after:mix-blend-multiply "
      >
        <div className="text-white flex flex-col gap-4">
          {/* heading with white background */}
          {line1 && (
            <h1 className=" uppercase text-clamp-hero-feature font-bold flex flex-col  gap-2">
              <span className="block w-max px-4 py-2 bg-white text-hero-overlay">
                {line1}
              </span>{" "}
              {line2 && <span className="block px-4">{line2}</span>}
            </h1>
          )}

          {/* subject */}
          <h2 className="text-lg uppercase ">{subject}</h2>

          {/* description of feature */}
          {line3 && (
            <p className="text-2xl font-semibold capitalize ">
              {/* text-balance: in future tailwind release */}
              {line3}
            </p>
          )}

          {/* link to category of articles */}
          {link && (
            <Link href={link} className=" hover:underline">
              Go &rarr;
            </Link>
          )}
        </div>
      </div>

      {/* light overlay */}
      {/* <div className="absolute inset-0 bg-[#355f08]/20 mix-blend-multiply  "></div> */}
    </section>
  );
};

export default SliderItem;
