// hero image as image div

import Image from "next/image";

type sliderProps = {
  id: number;
  image: string;
  alt: string;
  subject?: string;
  line1?: string;
  line2?: string;
  line3?: string;
};
const SliderItem = ({
  id,
  image,
  alt,
  subject,
  line1,
  line2,
  line3,
}: sliderProps) => {
  // h-[calc(100vh-4rem)]
  return (
    <section
      className="w-screen h-screen relative isolate
      bg-gradient-to-r from-gray-800/50 to-amber-900/50
      "
    >
      {/* hero image */}
      <Image
        src={image}
        alt={alt}
        fill
        priority
        className="-z-10 absolute object-cover object-center mix-blend-multiply opacity-80 "
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
         after:absolute after:-z-10 after:content-[''] after:inset-0 after:bg-hero-overlay/80 after:mix-blend-multiply "
      >
        <div className="text-white flex flex-col items-center gap-8">
          {/* heading with white background */}
          {line1 && (
            <h1 className=" uppercase text-clamp-hero-feature font-bold flex flex-col  gap-2">
              <span className="block w-max px-4 py-2 rounded-md bg-white text-hero-overlay">
                {line1}
              </span>{" "}
              {line2 && <span>{line2}</span>}
            </h1>
          )}

          {/* subject */}
          <h2 className="text-xl uppercase self-start">{subject}</h2>

          {/* description of feature */}
          {line3 && (
            <p className="text-clamp-hero-feature font-semibold capitalize ">
              {/* text-balance: in future tailwind release */}
              {line3}
            </p>
          )}
        </div>
      </div>

      {/* light overlay */}
      {/* <div className="absolute inset-0 bg-[#355f08]/20 mix-blend-multiply  "></div> */}
    </section>
  );
};

export default SliderItem;
