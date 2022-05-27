import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdOutlineClose } from "react-icons/md";

export default function NavBar() {
  let [isNavBarActive, setIsNavBarActive] = useState(false);

  const handleClick = () => {
    setIsNavBarActive(!isNavBarActive);
  };

  return (
    <nav className="sticky top-0 z-50 w-full px-5 py-3 bg-white shadow-sm h-fit sm:flex sm:justify-between md:px-10 sm:items-center">
      <div className="flex items-center justify-between flex-1">
        <Link href="/" passHref={true}>
          <a className="relative inline-block w-20 h-10">
            <Image
              src="/assets/images/logo.png"
              alt="titta digital"
              layout="fill"
              priority
            />
          </a>
        </Link>
        <button
          onClick={handleClick}
          className="transition-all duration-300 sm:hidden"
        >
          {isNavBarActive ? (
            <MdOutlineClose className="w-7 h-7" />
          ) : (
            <MdMenu className="w-7 h-7" />
          )}
        </button>
      </div>
      <ul
        className={`space-y-3 sm:flex sm:items-center sm:space-x-6 sm:space-y-0 sm:ml-0 ml-1 transition-all duration-200 overflow-hidden ${
          isNavBarActive ? "h-auto mt-5 sm:mt-0" : "h-0 sm:h-auto"
        }`}
      >
        <li className="sm:inline">
          <Link href="/services" passHref={true}>
            <a className="text-sm font-medium transition-all duration-300 hover:text-primary">
              Services
            </a>
          </Link>
        </li>
        <li className="sm:inline-block">
          <Link href="/about" passHref={true}>
            <a className="text-sm font-medium transition-all duration-300 hover:text-primary">
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio" passHref={true}>
            <a className="text-sm font-medium transition-all duration-300 hover:text-primary">
              Portfolio
            </a>
          </Link>
        </li>
        <li className="sm:inline-block">
          <Link href="/blog" passHref={true}>
            <a className="text-sm font-medium transition-all duration-300 hover:text-primary">
              Blog
            </a>
          </Link>
        </li>
        <li className="sm:inline-block">
          <Link href="/hire us" passHref={true}>
            <a className="inline-block px-3 py-2 text-sm font-medium text-white transition-all duration-300 rounded-md hover:bg-accent/80 bg-accent">
              Hire us
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
