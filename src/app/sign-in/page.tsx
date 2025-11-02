import React from "react";
import assets from "@/asset/assets";
import Image from "next/image";
const page = () => {
  return (
    <div className="  flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-6xl">
        {/* Main Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Branding & Description */}
          <div className="space-y-6 text-white">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Join the AGI revolution with Brainwave
              </h1>
              <p className="md:text-lg text-2xl hidden md:block  text-slate-300 leading-relaxed">
                Get started with Brainwave - AGI bot today and experience
                the power of AI in your conversations
              </p>
            </div>

            {/* Trust Badges */}
            <div className="hidden md:flex gap-6 pt-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-400">10K+</p>
                <p className="text-slate-400 text-sm">Active Users</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-cyan-400">24/7</p>
                <p className="text-slate-400 text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Right Section - Sign-Up Form */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 md:p-10 shadow-2xl order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              Create Your Account
            </h2>

            {/* Form Inputs */}
            <form className="space-y-5 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition duration-300"
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded border-slate-600 bg-slate-700 accent-blue-500 cursor-pointer"
                />
                <label htmlFor="terms" className="ml-2 text-sm text-slate-400">
                  I agree to the{" "}
                  <span className="text-blue-400 hover:text-blue-300 cursor-pointer">
                    Terms of Service
                  </span>
                </label>
              </div>
            </form>

            {/* Sign In Button */}
            <button className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105 active:scale-95 shadow-lg mb-6">
              SIGN UP
            </button>

            {/* Divider */}
            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-slate-800/50 text-slate-400">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Social Sign-In */}
            <div className="flex gap-4 justify-evenly">
              <button className=" bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg text-white font-medium transition duration-300 flex items-center justify-center gap-2 p-3">
                <Image
                  src={assets.instagram}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </button>
              <button className=" p-3 bg-slate-700/50 hover:bg-slate-700 border border-slate-600 rounded-lg text-white font-medium transition duration-300 flex items-center justify-center gap-2">
                <Image
                  src={assets.facebook}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </button>
            </div>

            {/* Sign In Link */}
            <p className="text-center text-slate-400 text-sm mt-6">
              Already have an account?{" "}
              <span className="text-blue-400 hover:text-blue-300 cursor-pointer font-medium">
                Sign In
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

<div className="flex gap-2 justify-center-safe items-center-safe ">
  <div className="max-w-2xs">
    <h1 className="text-2xl md:text-4xl">
      Join the AI revolution with Brainwave
    </h1>
    <p className="">
      Get started with Brainwave - AI chat app today and experience the power of
      AI in your conversations
    </p>
  </div>
  <div className=" flex-column space-y-2.5   ">
    <div>
      <input type="text" placeholder="Email" />
    </div>
    <div>
      <input type="password" placeholder="Password" />
    </div>
  </div>

  <div>
    <button>SIGN IN</button>
    <p>Or start your Brainwave with</p>
    <div className="flex">
      <Image src={assets.instagram} alt="instagram" />
      <Image src={assets.facebook} alt="facebook" />
    </div>
  </div>
</div>;
