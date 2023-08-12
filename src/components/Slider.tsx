"use client";
import { useEffect, useState } from "react";
import { heroSlider } from "../../data";
import SliderItem from "./SliderItem";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const numOfSlide = heroSlider.length;
  // console.log(currentSlide);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numOfSlide - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === numOfSlide - 1 ? 0 : (prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue === numOfSlide) {
          return 0;
        } else {
          return newValue;
        }
      });

      // somehow below does not work
      // const interval = setInterval(() => {
      //   setCurrentSlide(currentSlide === numOfSlide - 1 ? 0 : currentSlide + 1);

      // below will not work, always print 0
      // console.log(currentSlide);
    }, 5000);
    // clean up
    return () => clearInterval(interval);
  }, []);

  // bg-gradient-to-r from-[#4682B4]/30 to-[#B22222]/30
  const sliderWidth = `w-[${numOfSlide * 100}vw]`;

  return (
    // <div
    //   className=" h-[calc(100vh-4rem)] w-screen
    // relative"
    // >
    <div
      className="absolute top-0 left-0 h-screen w-screen -z-10
    "
    >
      <div
        className={`${sliderWidth} h-full flex
        transition-all duration-500 ease-in-out `}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {heroSlider.map((item) => (
          <div key={item.id} className="h-full">
            <SliderItem {...item} />
          </div>
        ))}
      </div>

      {/* buttons */}
      <div
        className="absolute left-0 right-0 bottom-[10vh] mx-auto w-[100px]
      flex justify-between
      text-5xl font-bold text-white"
      >
        {/* [&>*]:w-[50px] [&>*]:h-[50px] [&>*]:border [&>*]:border-gray-300 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:cursor-pointer */}
        {/* left arrow */}
        {/* <button className="" onClick={prevSlide}>
          <span className="">&lsaquo;</span>
        </button>
        {/* right arrow */}
        {/* <button className="" onClick={nextSlide}>
          <span className="">&rsaquo;</span>
        </button> */}
        {Array.from({ length: numOfSlide }).map((slide, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border border-gray-300 ${
              index === currentSlide ? "bg-white" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
