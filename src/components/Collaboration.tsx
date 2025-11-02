import Image from "next/image";
import assets from "@/asset/assets";
const Collaboration = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-30 w-full px-5 mt-5 sm:mt-10 md:mt-16">
        {/* Left Content */}
        <div className="flex flex-col">
          <div className="text-2xl md:text-3xl lg:text-4xl lg:text-left font-bold">
            AGI App for Seamless Collaboration
          </div>
          <div className="flex flex-col mt-6 space-y-5">
            <div className="flex gap-4">
              <Image src={assets.check} alt="" />
              <p>Seamless Integration</p>
            </div>
            <p className="text-[14px] text-gray-500">
              With smart automation and top notch security <br />
              it's the perfect solution for teams looking to work smarter.
            </p>
            <div className="flex gap-3">
              <Image src={assets.check} alt="" />
              <p>Smart Automation</p>
            </div>
            <div className="flex gap-3">
              <Image src={assets.check} alt="" />
              <p>Top Notch Security</p>
            </div>
          </div>
          <div className="flex mt-8">
            <button className="sm:p-[3px] p-0.5 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="sm:px-8 sm:py-2 py-1.5 px-3 text-xs bg-black rounded-[6px]  relative group transition ease-in  font-mono hover:bg-transparent ">
                TRY IT NOW
              </div>
            </button>
          </div>
        </div>

        {/* Right Circle with Ring */}
        <div className="relative w-60 sm:w-72 md:w-80 lg:w-96 aspect-square">
          <div className="absolute inset-0 border border-gray-600 rounded-full"></div>
          <div className="absolute inset-8 sm:inset-12 border border-gray-600 rounded-full"></div>

          <div className="absolute inset-1/3 p-1 rounded-full">
            <div className="flex items-center justify-center w-full h-full rounded-full">
              <Image
                src={assets.brainwaveSymbol}
                width={50}
                height={50}
                alt="brainwave"
              />
            </div>
          </div>

          {/* 8 Icons on Ring */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image src={assets.figma} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute top-[14.6%] right-[14.6%] translate-x-1/2 -translate-y-1/2">
              <Image src={assets.notion} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <Image src={assets.discord} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute bottom-[14.6%] right-[14.6%] translate-x-1/2 translate-y-1/2">
              <Image src={assets.slack} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <Image src={assets.photoshop} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute bottom-[14.6%] left-[14.6%] -translate-x-1/2 translate-y-1/2">
              <Image src={assets.protopie} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
              <Image src={assets.framer} alt="" className="w-8 sm:w-10" />
            </div>
            <div className="absolute top-[14.6%] left-[14.6%] -translate-x-1/2 -translate-y-1/2">
              <Image src={assets.raindrop} alt="" className="w-8 sm:w-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collaboration;
