import React from "react";
import HeroCarousel from "./HeroCarousel";

const Hero = () => {
  return (
    <div className="flex flex-col lg:min-h-max xl:flex-row xl:max-w-[1460px]">
      <div
        className="
          grid max-w-screen-xl 
          px-8 py-8 mx-auto md:py-4 
          lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-10"
      >
        <div
          className="
            flex flex-col 
            justify-center items-center place-self-left
            max-w-[70%]  m-auto 
            lg:w-full lg:col-span-12"
        >
          <h1 className="text-4xl inline md:text-5xl xl:text-6xl font-semibold text-left">
            Power your life with Evrydy audio
          </h1>
          <p className="text-[16px] my-3 font-light text-left">
            Millions of customers choose Evrydy for the best prices, comfort and
            audio quality
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center md:w-full xl:max-w-[50%] p-8">
        <HeroCarousel />
      </div>
    </div>
  );
};

export default Hero;

function undefined({}) {
  return (
    <img
      src="https://images.unsplash.com/photo-1660576333106-ca39ad891f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80"
      alt="hero"
      className="aspect-[4/3] rounded-3xl"
    />
  );
}
