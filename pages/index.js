import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { IoPulseOutline } from "react-icons/io5";
import { GiDiscussion } from "react-icons/gi";
import TestimonialCard from "../components/Home/TestimonialCard";
import LatestBlogCard from "../components/Home/LatestBlogCard";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    let videoElement = document.getElementById("video");
    videoElement.play();
    videoElement.controls = true;
  };

  const handlePause = () => {
    setIsPlaying(!isPlaying);
    let videoElement = document.getElementById("video");
    videoElement.pause();
    videoElement.controls = false;
  };
  return (
    <div className="relative max-w-full space-y-16 md:space-y-20 text-accent">
      <section className="relative h-screen">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/images/path 1.png"
            alt="path"
            layout="fill"
            priority
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl px-5 pt-10 mx-auto text-white">
          <h1 className="mb-5 text-3xl font-medium text-center sm:text-4xl md:text-5xl">
            Building Digital Products, Brands &amp; Experience
          </h1>
          <p className="mb-5 text-xs text-center sm:text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            placeat laborum perferendis repudiandae quidem doloribus dolorum
            illo rem aliquam neque.
          </p>
          <Link href="/" passHref>
            <a className="block px-5 py-2 mx-auto mb-8 text-sm font-medium text-white transition-all duration-300 rounded-md hover:bg-accent/80 bg-accent w-fit">
              Get to know us
            </a>
          </Link>
          <div className="relative block w-full max-w-md mx-auto overflow-hidden rounded-md h-fit">
            {!isPlaying && (
              <div className="absolute top-0 left-0 z-10 w-full h-full bg-black/20"></div>
            )}
            <video
              src="/assets/video/pexels-kindel-media-6774633.mp4" // width="320"
              // height="240"
              // controls
              id="video"
              className="w-full h-full cursor-pointer"
              onPause={handlePause}
            ></video>
            {!isPlaying && (
              <button
                onClick={handleClick}
                className="absolute z-20 p-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full top-1/2 left-1/2"
              >
                <MdPlayArrow className="w-10 h-10 text-accent" />
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="relative px-5 pb-5 md:px-10 md:flex md:justify-between md:items-start md:space-x-10 min-h-fit">
        <div className="max-w-2xl">
          <h1 className="mb-3 text-xl font-medium md:text-2xl">
            Why Are We The Best From Other
          </h1>
          <p className="mb-3 text-sm md:text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos laudantium libero ipsum nesciunt sapiente corrupti
            commodi ratione iure eos odio corporis labore sed placeat quaerat
            cupiditate doloremque, aliquam voluptate, quisquam quasi ab
            obcaecati voluptas? Quas rem, odio eveniet et perferendis delectus,
            suscipit ullam explicabo inventore quae molestiae alias quia totam!
          </p>
          <p className="mb-6 text-sm md:text-md">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Necessitatibus molestias, molestiae tempora corrupti alias
            aspernatur voluptate, quidem ab sapiente vitae aperiam ipsam illum
            distinctio unde. Perferendis, possimus blanditiis. Quam, non.
          </p>
          <Link href="/hire" passHref>
            <a className="inline-block px-3 py-1 text-sm transition-all duration-200 border rounded-md border-accent md:text-md hover:bg-accent hover:text-white">
              Hire us
            </a>
          </Link>
          <div className="relative w-full overflow-hidden rounded-md h-60 mt-7 md:h-72">
            <Image
              src="/assets/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
              alt="working"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="relative w-full overflow-hidden rounded-md h-60 mt-7 md:mt-0 md:h-[565px]">
          <Image
            src="/assets/images/aleksandra-sapozhnikova-r_-zzXrnzxI-unsplash.jpg"
            alt="working"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
      <section className="relative px-5 pb-5 md:px-10 min-h-fit">
        <h1 className="max-w-xs mx-auto mb-8 text-xl font-medium text-center md:mb-10 md:text-2xl">
          Discover Some Of Our Amazing Services
        </h1>
        <div className=" md:flex md:justify-between md:items-start md:space-x-10">
          <div className="h-fit">
            <div className="flex items-start justify-start mb-3 space-x-3">
              <FaGlobe className="w-20 h-20 text-accent" />
              <span>
                <h2 className="mb-1 font-medium text-md md:text-lg">
                  Web Developement
                </h2>
                <p className="text-sm md:text-md">
                  We create stunning and converting web pages for our clients so
                  that they can have a very high ROI and many more...
                </p>
              </span>
            </div>
            <div className="flex items-start justify-start mb-3 space-x-3">
              <IoIosPaper className="w-20 h-20 text-accent" />
              <span>
                <h2 className="mb-1 font-medium text-md md:text-lg">
                  Content creation and modification
                </h2>
                <p className="text-sm md:text-md">
                  We create stunning and converting web pages for our clients so
                  that they can have a very high ROI and many more...
                </p>
              </span>
            </div>
            <div className="flex items-start justify-start mb-3 space-x-3">
              <IoPulseOutline className="w-20 h-20 text-accent" />
              <span>
                <h2 className="mb-1 font-medium text-md md:text-lg">
                  SEO and marketing
                </h2>
                <p className="text-sm md:text-md">
                  We create stunning and converting web pages for our clients so
                  that they can have a very high ROI and many more...
                </p>
              </span>
            </div>
            <Link href="/services" passHref>
              <a className="inline-block text-sm underline md:text-md">
                Learn more
              </a>
            </Link>
          </div>
          <div className="relative w-full overflow-hidden rounded-md h-60 mt-7 md:mt-0 md:h-80">
            <Image
              src="/assets/images/blake-wisz-tE6th1h6Bfk-unsplash.jpg"
              alt="working"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
      </section>
      <section className="relative w-full px-5 pb-5 md:px-10 min-h-fit">
        <h1 className="mb-5 text-xl font-medium md:text-2xl">
          What Our Clients Are Saying
        </h1>
        <div className="w-full max-w-full overflow-auto hide-overflow">
          <div className="flex items-start justify-start py-2 space-x-5 w-fit flex-nowrap h-fit">
            {Array(5)
              .fill()
              .map((_, i) => (
                <TestimonialCard key={i} />
              ))}
          </div>
        </div>
      </section>
      <section className="relative w-full px-5 pb-5 md:px-10 min-h-fit">
        <h1 className="mb-5 text-xl font-medium md:text-2xl">Latest Updates</h1>
        <div className="w-full max-w-full overflow-auto hide-overflow">
          <div className="flex items-start justify-start py-2 space-x-5 w-fit flex-nowrap h-fit">
            {Array(5)
              .fill()
              .map((_, i) => (
                <LatestBlogCard key={i} />
              ))}
          </div>
        </div>
      </section>
      <section className="relative w-[95%] p-5 m-auto rounded-md md:px-10 min-h-72 bg-primary flex justify-center space-y-5 md:space-y-0 md:space-x-10 items-start flex-wrap">
        <div className="max-w-lg">
          <h1 className="mb-3 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
            Got A Project Or A Partnership In Mind?
          </h1>
          <p className="mb-10 text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure
            adipisci fugit voluptates molestiae quos. Voluptate deserunt
            reiciendis dignissimos, eum nostrum laboriosam eligendi odit sint
            at. Dignissimos eius minima quam.
          </p>
          <Link href="/discuss" passHref>
            <a className="px-5 py-2 text-sm bg-white rounded-md text-primary">
              Let&apos;s discuss
            </a>
          </Link>
        </div>
        <GiDiscussion className="w-56 h-56 text-white" />
      </section>
    </div>
  );
}
