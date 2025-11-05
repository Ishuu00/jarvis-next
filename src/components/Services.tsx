import assets from "@/asset/assets";
import { div } from "framer-motion/client";
import Image from "next/image";
const Services = () => {
  return (
    <>
      <div className="p-3 md:p-5 m-auto max-w-7xl tracking-wide">
        {/* Services Intro */}
        <div className="text-center my-20">
          <h1 className="text-2xl sm:text-4xl font-bold">
            Generative AGI made for Everbody
          </h1>
          <p className="text-gray-400 p-3">
            Jarvis unlocks the potential of AI-powered applications
          </p>
        </div>

        {/* Box 1 */}
        <div className="relative flex flex-col lg:flex-row justify-center items-center gap-8 border rounded-4xl border-gray-700 overflow-hidden">
          <div className="shrink-0 order-2 lg:order-1">
            <Image
              src={assets.service1}
              alt="Healthcare"
              className="h-120 w-full object-cover rounded-2xl lg:rounded-none"
            />
          </div>
          <div className="flex-col flex items-center-safe lg:items-start w-full lg:w-1/2 lg:text-left p-4 lg:p-8 absolute lg:relative z-10 lg:z-auto order-1 lg:order-2">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Healthcare & Elderly Care
            </h1>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Precision Medical Assistant. It can assist in complex surgeries
              with faultless precision.
            </p>
            <div className="mt-7 space-y-2.5">
              <div className="flex gap-2 ">
                <Image src={assets.check} alt="" />
                <p>24/7 Personalized care to the elderly</p>
              </div>
              <div className="flex gap-2">
                <Image src={assets.check} alt="" />
                <p>Monitor health data</p>
              </div>
              <div className="flex gap-2">
                <Image src={assets.check} alt="" />
                <p>Administer medication perfectly</p>
              </div>
            </div>
          </div>
        </div>

        {/* Box2 left */}
        <div className="max-w-7xl mt-5  mx-auto p-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-700 rounded-4xl overflow-hidden p-4 md:p-6">
            {/* Image 1 */}
            <div className="relative flex items-center justify-center hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.service2}
                alt="Service 2"
                className="w-full object-cover rounded-2xl  mask-b-from-80% mask-l-from-99% "
              />
              <div className="absolute top-10 sm:left-10">
                <p className="sm:p-4 p-1.5 bg-black border border-gray-500 rounded-t-3xl rounded-bl-3xl">
                  What is today's topic
                </p>
              </div>
              <div className="absolute sm:left-10 bottom-16 max-w-[300px]">
                <h1 className="text-3xl mb-5">Education & Tutoring</h1>
                <p className="text-gray-300">
                  Personalized tutor that adapts to each student's pace and
                  style.
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className=" relative flex items-end justify-center hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.service3}
                alt="Service 3"
                className="w-full h-120 object-cover rounded-2xl mask-t-from-80%"
              />
              <div className="absolute bottom-10 sm:left-10 md:top-0 lg:top-10 max-w-[300px]">
                <h1 className="text-3xl mb-5">
                  Dangerous & Harsh Environments
                </h1>
                <p className="text-gray-300">
                  Navigates disaster zones, contaminated areas, and deep space
                  where human life is at risk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
