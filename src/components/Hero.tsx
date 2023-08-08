// hero image as background image of top div

const Hero = () => {
  return (
    <section
      className="container relative isolate h-[calc(100vh-4rem)] bg-hero"

      // bg-[url('/office.jpg')] bg-cover bg-center"
    >
      {/* bg-hero-overlay/30 bg-blend-multiply */}

      {/* light overlay */}
      {/* <div
        className="absolute inset-0 bg-[linear-gradient(rgba(70, 130, 180, .8), rgba(178, 34, 34, .8))]
      border border-red-500  "
      ></div> */}

      {/* dark overlay with text */}
      {/* bg-[#355f08] */}
      <div
        className=" relative h-[400px] md:h-full md:w-[40%] p-10
        grid place-content-center
         after:absolute after:-z-10 after:content-[''] after:inset-0 "
        //  after:bg-hero-overlay/80 after:mix-blend-multiply "
      >
        <div className="text-white flex flex-col items-start gap-8">
          <h1 className=" uppercase text-4xl font-bold flex flex-col items-start gap-2">
            <span className="block w-max px-4 py-2 rounded-md bg-white text-hero-overlay">
              You can choose{" "}
            </span>{" "}
            <span>where you live</span>
          </h1>
          <p className="text-5xl font-semibold">we are here to help you</p>
        </div>
      </div>

      {/* hero image */}
      {/* <div className="-z-10 mix-blend-multiply ">
          <Image
            src="/office.jpg"
            alt="hero office"
            fill
            priority
            objectFit="cover"
            objectPosition="center"
            className="grayscale-0 "
          />
        </div> */}
    </section>
  );
};

export default Hero;
