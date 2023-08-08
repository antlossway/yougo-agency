"use client";
import { useState } from "react";
import { heroSlider } from "../../data";
import SliderItem from "./SliderItem";

const numOfSlide = heroSlider.length;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? numOfSlide - 1 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === numOfSlide - 1 ? 0 : (prev) => prev + 1);
  };

  // bg-gradient-to-r from-[#4682B4]/30 to-[#B22222]/30

  return (
    <div
      className=" h-[calc(100vh-4rem)] w-screen
    relative"
    >
      <ul
        className="w-[200vw] h-full flex
        transition-all duration-1000  "
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {heroSlider.map((item) => (
          <li key={item.id} className="h-full">
            <SliderItem {...item} />
          </li>
        ))}
      </ul>

      {/* buttons */}
      <div
        className="absolute left-0 right-0 bottom-[10vh] mx-auto w-[300px]
      flex justify-between
      text-5xl font-bold text-white
      [&>*]:w-[50px] [&>*]:h-[50px] [&>*]:border [&>*]:border-gray-300 [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:cursor-pointer"
      >
        {/* left arrow */}
        <button className="" onClick={prevSlide}>
          <span className="">&lsaquo;</span>
        </button>
        {/* right arrow */}
        <button className="" onClick={nextSlide}>
          <span className="">&rsaquo;</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
