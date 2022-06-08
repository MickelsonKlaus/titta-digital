import Image from "next/image";
import Link from "next/link";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full p-5 mt-10 bg-gray-50 min-h-96 md:px-10">
      <div className="w-full gap-8 mb-10 space-y-8 md:flex md:justify-between md:items-start md:space-y-0 md:flex-wrap">
        <div className="md:max-w-lg">
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
          <p className="my-3 text-sm text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sit
            numquam tempore nobis atque minima accusantium laudantium id dolorum
            dolore quibusdam, non ipsam commodi, impedit aliquam nesciunt.
            Eaque, optio laborum.
          </p>
          <form className="flex items-end justify-center w-full max-w-sm mt-5">
            <label
              htmlFor="newsletter"
              className="inline-block w-full text-sm font-medium text-accent"
            >
              Subscribe to our newsletter
              <input
                type="email"
                name="newsletter"
                id="newsletter"
                placeholder="Enter your email address"
                required
                className="block w-full px-5 py-2 mt-2 border-2 outline-none rounded-tl-md rounded-bl-md bg-none border-primary"
              />
            </label>
            <button
              type="submit"
              className="px-3 py-2 text-white bg-primary rounded-tr-md rounded-br-md"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-medium text-accent">
            Official Links
          </h4>
          <ul className="space-y-2">
            <li>
              <Link href="/services" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/portfolio" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Portfolio
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Blog
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 text-sm font-medium text-accent">Useful Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/support" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Support
                </a>
              </Link>
            </li>
            <li>
              <Link href="/partnership" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Partnership
                </a>
              </Link>
            </li>
            <li>
              <Link href="/policy" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Private Policy
                </a>
              </Link>
            </li>
            <li>
              <Link href="/help" passHref={true}>
                <a className="text-sm transition-all duration-200 text-accent hover:underline">
                  Help
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-medium text-accent">
            Follow Us On Our Socials
          </h4>
          <span className="flex items-center justify-start space-x-5">
            <Link href="https://facebook.com/" passHref target="_blank">
              <a>
                <BsFacebook className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="https://twitter.com/" passHref target="_blank">
              <a>
                <BsTwitter className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="https://instagram.com/" passHref target="_blank">
              <a>
                <BsInstagram className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="mailto:support@titta.com" passHref target="_blank">
              <a>
                <MdEmail className="w-5 h-5 text-accent" />
              </a>
            </Link>
          </span>
        </div>
      </div>
      <p className="text-sm text-accent">
        Copyright &copy;. All rights reserved.{" "}
        {new Date().getFullYear().toString()}
      </p>
    </footer>
  );
}
