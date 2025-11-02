"use client";
import assets from "@/asset/assets";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
const BenefitSection = () => {
  return (
    <>
      <div className="my-10 sm:mt-20">
        <h2 className="text-center text-2xl font-bold sm:text-3xl md:text-4xl">
          Chat Smarter, Not Harder <br />
          with Brainwave
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-5 max-w-7xl mx-auto w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[400px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Ask anything, AI powers the entire universe
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Jarvis AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src={assets.benefitImage2}
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[10%] grayscale filter -bottom-10 object-contain rounded-2xl -z-10 w-auto h-auto"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Solving Complex Global Problems.
          </h2>
          <p className="mt-4 max-w-104 text-left  text-base/6 text-neutral-200">
            AI is a powerful tool for tackling massive and complex challenges
            that are beyond human capacity for analysis.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art Jarvis AI
              wrapper today!
            </h2>
            <p className="mt-4 max-w-104 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active bot users, Jarvis AI is the most
              popular AI platform for developers.
            </p>
          </div>
          <Image
            src={assets.jarvis}
            alt="linear demo image"
            className="absolute -right-10  lg:-right-[1%] bottom-0 object-cover rounded-2xl -z-10"
          />
        </WobbleCard>
      </div>
    </>
  );
};

export default BenefitSection;
