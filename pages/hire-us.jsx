import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "shimmer";

function Hire_us() {
  return (
    <section className="relative p-5 mb-20 md:px-10 min-h-60">
      <h1 className="text-md md:text-lg">
        Hire or contact us for a partnership
      </h1>
      <p className="mb-5 text-xs opacity-70">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, ut.
      </p>
      <div className="h-full md:flex md:justify-between md:items-start md:space-x-5">
        <div className="relative flex-1 w-full overflow-hidden rounded-md h-60 md:h-[28rem]">
          <Image
            src="/assets/images/sebastian-herrmann-NbtIDoFKGO8-unsplash.jpg"
            alt="working"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(300, 400)
            )}`}
          />
        </div>
        <div className="flex-1">
          <form className="mt-5 space-y-5 text-sm md:mt-0 text-accent">
            <span className="flex flex-wrap items-center justify-between space-x-3">
              <label htmlFor="firstName" className="flex-1">
                First Name
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first Name"
                  required
                  className="block w-full pb-1 mt-2 border-b outline-none border-accent/50 focus:border-accent"
                />
              </label>
              <label htmlFor="lastName" className="flex-1">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last Name"
                  required
                  className="block w-full pb-1 mt-2 border-b outline-none border-accent/50 focus:border-accent"
                />
              </label>
            </span>
            <span className="flex flex-wrap items-center justify-between space-x-3">
              <label htmlFor="email" className="flex-1">
                Email Address
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  required
                  className="block w-full pb-1 mt-2 border-b outline-none border-accent/50 focus:border-accent"
                />
              </label>
              <label htmlFor="number" className="flex-1">
                Phone Number
                <input
                  type="tel"
                  name="number"
                  id="number"
                  placeholder="Enter your phone number"
                  required
                  className="block w-full pb-1 mt-2 border-b outline-none border-accent/50 focus:border-accent"
                />
              </label>
            </span>
            <label htmlFor="message" className="inline-block w-full">
              Message
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                cols="30"
                rows="10"
                className="block w-full pb-1 mt-2 border-b outline-none border-accent/50 focus:border-accent"
              ></textarea>
            </label>
            <button className="px-5 py-2 text-xs text-white rounded-md w-fit bg-accent md:text-sm">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hire_us;
