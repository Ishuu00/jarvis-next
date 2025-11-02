import assets from "@/asset/assets";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex sticky z-50 top-0  items-center-safe px-6 py-6 justify-between font-bold overflow-hidden w-full tracking-wide h-24 bg-black">
      <div>
        <Image
          src={assets.brainwave}
          alt="brainwavelogo"
          className="h-8 sm:h-10"
        />
      </div>
      <div className="hidden sm:flex sm:flex-1 justify-center-safe items-center-safe sm:gap-2 md:gap-10 lg:gap-20 text-xs">
        <Link href="/">FEATURES</Link>
        <Link href="/">PRICING</Link>
        <Link href="/">HOW TO USE</Link>
        <Link href="/">ROADMAP</Link>
      </div>
      <div className="flex gap-2.5 justify-center items-center">
        <Link href="sign-in" className="hidden sm:block text-xs">
          Sign In
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 rounded-md box-content p-1 border border-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
