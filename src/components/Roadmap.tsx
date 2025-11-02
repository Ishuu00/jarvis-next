import React from "react";
import assets from "@/asset/assets";
import Image from "next/image";
const Roadmap = () => {
  return (
    <>
      <h1 className="text-xs text-center text-gray-400 tracking-wider mt-20">
        [ READY TO GET STARTED ]
      </h1>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mt-5 md:mb-10">
        What we are working on
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5 bg-[#0a0a0f] max-w-7xl m-auto">
        {/* Card 1 - Voice Recognition */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-4xl p-5 overflow-hidden group hover:border-gray-700 transition-all ease-in duration-300">
          {/* Date badge */}
          <div className="absolute top-6 left-6 lg:top-10 lg:left-10 text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
            Nov 2025
          </div>

          {/* Priority badge */}
          <div className="absolute top-6 right-6 text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
            On Progress
          </div>

          {/* Image container */}
          <div className="mt-16 mb-8 flex items-center justify-center">
            <Image
              src={assets.roadmap1}
              alt="Voice recognition illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Voice recognition
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Enable the chatbot to understand and respond to voice commands,
              making it easier for users to interact with the app hands-free
            </p>
          </div>
        </div>

        {/* Card 2 - Gamification */}
        <div className="relative md:top-20 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-4xl p-8 overflow-hidden group hover:border-gray-700 transition-all duration-300">
          <div className="absolute top-6 left-6 text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
            MAY 2025
          </div>

          <div className="absolute top-6 right-6 text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
            On Progress
          </div>

          <div className="mt-16 mb-8 flex items-center justify-center">
            <Image
              src={assets.roadmap2}
              alt="Gamification illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Gamification
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Add game-like elements, such as leaderboards, to incentivize users
              to engage with the chatbot more frequently
            </p>
          </div>
        </div>

        {/* Card 3 - Chatbot Customization */}
        <div className="relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-4xl p-8 overflow-hidden group hover:border-gray-700 transition-all duration-300">
          <div className="absolute top-6 left-6 text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
            MAY 2025
          </div>

          <div className="absolute top-6 right-6 text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
            On Progress
          </div>

          <div className="mt-16 mb-8 flex items-center justify-center">
            <Image
              src={assets.roadmap3}
              alt="Chatbot customization illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Chatbot customization
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Allow users to customize the chatbot's appearance and behavior,
              making it more engaging and fun to interact with
            </p>
          </div>
        </div>

        {/* Card 4 - Integration with APIs */}
        <div className="relative md:top-20 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-4xl p-8 overflow-hidden group hover:border-gray-700 transition-all duration-300 h-auto">
          <div className="absolute top-6 left-6 text-xs text-gray-500 border border-gray-800 px-3 py-1 rounded-full">
            MAY 2025
          </div>

          <div className="absolute top-6 right-6 text-xs text-gray-400 bg-white/10 px-3 py-1 rounded-full">
            On Progress
          </div>

          <div className="mt-16 mb-8 flex items-center justify-center">
            <Image
              src={assets.roadmap4}
              alt="API integration illustration"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Integration with APIs
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Allow the chatbot to access external data sources, such as weather
              or news APIs, to provide more relevant recommendations
            </p>
          </div>
        </div>
        <div className="m-auto">
          <button className="sm:p-[3px] p-0.5 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
            <div className="sm:px-10 sm:py-3 py-1.5 px-3 text-sm bg-black rounded-md  relative group transition ease-in  font-mono hover:bg-transparent ">
              TRY IT NOW
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Roadmap;

<div className=" relative grid grid-cols-1 sm:grid-cols-2  h-auto">
  <div className="max-w-800px border rounded-3xl">
    <Image src={assets.roadmap1} alt="roadmap" />
    <h1 className="text-2xl sm:text-3xl md:text-4xl ">Voice recognition</h1>
    <p className="text text-gray-500 tracking-wider">
      Enable the chatbot to understand and respond to voice commands, making it
      easier for users to interact with the app hands-free
    </p>
    <div className="absolute top-0 right-0">
      <Image src={assets.grid} alt="grid" />
    </div>
  </div>
</div>;
