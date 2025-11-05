import React from "react";
import asset from "@/asset/assets";
import Image from "next/image";
import Particles from "./ui/dotted-background";
const HeroSection = () => {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center relative">
        {/* Particles - Background layer */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={false}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Front top details */}
        <div className="relative z-10 top-10 md:top-14 lg:top-20 flex flex-col justify-center items-center px-3 text-center pb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Explore the Possibilities Of <br /> AI with BrainwaveCurve
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
              Brainwave
            </h1>
            <Image
              src={asset.curve}
              alt="curve"
              className="w-40 lg:w-60 mt-1"
            />
          </div>
          <p className="mt-8 text-gray-300">
            Unleash the power of Within Brainwave. Upgrade your productivity
            with Brainwave the open AGI bot.
          </p>
          <button className="my-5 hover:opacity-90 cursor-pointer px-8 py-0.5 border-2 border-black dark:border-white bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]">
            Get Started
          </button>

          {/* Main Robot */}
          <div className="relative p-2 max-w-7xl ">
            <div className="flex justify-center">
              <Image
                src={asset.chip}
                alt=""
                className="relative top-10  border-2 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-3xl sm:object-center object-cover"
              />

              {/* AI Generating bar */}
              <div className="absolute flex gap-2.5 text-left bottom-0 sm:w-80 px-2.5 py-2 rounded-full bg-black opacity-70">
                <Image
                  src={asset.loading}
                  alt=""
                  height={25}
                  className="animate-spin"
                />
                <p>AI is Generating</p>
              </div>

              {/* Right Floating bar */}
              <div className="hidden sm:absolute right-0 top-40 md:top-60 md:scale-120 backdrop-blur border border-gray-600 rounded-2xl py-2.5 px-3 gap-5 animate-[float_3s_ease-in-out_infinite] sm:flex">
                <div>
                  <Image
                    src={asset.notification1}
                    alt=""
                    height={60}
                    className="rounded-2xl"
                  />
                </div>
                <div className="flex flex-col justify-center gap-y-2">
                  <p className="text-xs font-bold">Code Generation</p>
                  <div className="flex gap-1">
                    <Image
                      src={asset.notification2}
                      alt=""
                      height={25}
                      className="rounded-full"
                    />
                    <Image
                      src={asset.notification3}
                      alt=""
                      height={25}
                      className="rounded-full"
                    />
                    <Image
                      src={asset.notification4}
                      alt=""
                      height={25}
                      className="rounded-full"
                    />
                  </div>
                </div>
              </div>

              {/* Left floating bar */}
              <div className="hidden sm:flex absolute left-0 bottom-30 p-3 rounded-2xl backdrop-blur animate-[float_3s_ease-in-out_infinite] border border-gray-600 gap-4 cursor-pointer md:scale-110">
                <Image
                  src={asset.homeSmile}
                  alt="homeSmile"
                  className="hover:scale-120 transition-all ease-in"
                />
                <Image
                  src={asset.file02}
                  alt="files"
                  className="hover:scale-120 transition-all ease-in"
                />
                <Image
                  src={asset.searchMd}
                  alt="search"
                  className="hover:scale-120 transition-all ease-in"
                />
                <Image
                  src={asset.plusSquare}
                  alt="plusSquare"
                  className="hover:scale-120 transition-all ease-in"
                />
              </div>
            </div>

            {/* Background of robot */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

<div className=" w-full h-full flex justify-center items-center relative">
  <div
    style={{
      width: "100%",
      height: "600px",
      position: "relative",
      zIndex: "-1",
    }}
  >
    {/* Metors */}
    <Particles
      particleColors={["#ffffff", "#ffffff"]}
      particleCount={300}
      particleSpread={10}
      speed={0.1}
      particleBaseSize={100}
      moveParticlesOnHover={false}
      alphaParticles={false}
      disableRotation={false}
    />
  </div>

  {/* front top details */}
  <div className="absolute top-10 md:top-14 lg:top-20 flex flex-col justify-center-safe items-center-safe px-3 text-center">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center ">
      Explore the Possibilities Of <br /> AI with BrainwaveCurve
    </h1>
    <div className="flex flex-col items-center">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center ">
        Brainwave
      </h1>
      <Image src={asset.curve} alt="curve" className="w-40 lg:w-60 mt-1" />
    </div>
    <p className="mt-8 text-gray-400">
      Unleash the power of Within Brainwave. Upgrade your productivity with
      Brainwave the open AI chat app.
    </p>
    <button className="my-5 hover:opacity-90 cursor-pointer px-8 py-0.5  border-2 border-black dark:border-white bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
      Get Started
    </button>

    {/* Main Robot */}
    <div className="relative p-2">
      <div className="flex justify-center-safe">
        <Image
          src={asset.robot}
          alt=""
          className="relative top-10 border-2  bg-gradient-to-br from-green-300 via-blue-500 to-purple-600 rounded-3xl sm:aspect-video sm:object-center object-cover"
        />

        {/* AI Generating bar */}
        <div className="absolute flex gap-2.5 text-left bottom-0 sm:w-80 px-2.5 py-2 rounded-full bg-black opacity-70">
          <Image
            src={asset.loading}
            alt=""
            height={25}
            className=" animate-spin"
          />
          <p>AI is Generating</p>
        </div>

        {/* Right FLoating bar */}
        <div className="hidden sm:absolute right-0 top-40 md:top-60 md:scale-120 backdrop-blur border border-gray-600 rounded-2xl py-2.5 px-3 gap-5 animate-[float_3s_ease-in-out_infinite] sm:flex">
          <div>
            <Image
              src={asset.notification1}
              alt=""
              height={60}
              className="rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-center-safe gap-y-2">
            <p className="text-xs font-bold">Code Generation</p>
            <div className="flex gap-1">
              <Image
                src={asset.notification2}
                alt=""
                height={25}
                className="rounded-full"
              />
              <Image
                src={asset.notification3}
                alt=""
                height={25}
                className="rounded-full"
              />
              <Image
                src={asset.notification4}
                alt=""
                height={25}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        {/* Left floating bar  */}
        <div className="hidden sm:flex absolute left-0 bottom-30 p-3 rounded-2xl backdrop-blur animate-[float_3s_ease-in-out_infinite] border border-gray-600 gap-4 cursor-pointer md:scale-110">
          <Image
            src={asset.homeSmile}
            alt="homeSmile"
            className="hover:scale-120 transition-all ease-in "
          />
          <Image
            src={asset.file02}
            alt="files"
            className="hover:scale-120 transition-all ease-in "
          />
          <Image
            src={asset.searchMd}
            alt="search"
            className="hover:scale-120 transition-all ease-in "
          />
          <Image
            src={asset.plusSquare}
            alt="plusSquare"
            className="hover:scale-120 transition-all ease-in "
          />
        </div>
      </div>

      {/* background of robot */}
      <div>
        <Image
          src={asset.heroBackground}
          alt=""
          className=" absolute bottom-45 sm:hidden sm:-bottom-0.5 -z-10"
        />
      </div>
    </div>
  </div>
</div>;
