import Image from "next/image";
import assets from "@/asset/assets";
import PricingCard from "./ui/pricingCard";
import Link from "next/link";
const Pricing = () => {
  return (
    <>
      <div className="text-center my-10">
        <h1>[ Get started with Jarvis ]</h1>
        <h1 className="text-2xl sm:text-4xl font-bold mt-3 px-3 ">
          Choose Your AGI Transformation Level
        </h1>
      </div>
      <div className="flex flex-wrap items-baseline m-auto justify-center">
        <PricingCard />
      </div>
      <div className="flex justify-center-safe">
        <Link href="/" className="underline hover:no-underline">
          SEE THE FULL DETAILS
        </Link>
      </div>
    </>
  );
};

export default Pricing;
