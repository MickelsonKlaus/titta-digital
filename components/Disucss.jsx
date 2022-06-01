import Link from "next/link";
import { GiDiscussion } from "react-icons/gi";

export default function Disucss() {
  return (
    <section className="relative w-[95%] p-5 m-auto rounded-md md:px-10 min-h-72 bg-primary flex justify-center space-y-5 md:space-y-0 md:space-x-10 items-start flex-wrap">
      <div className="max-w-lg">
        <h1 className="mb-3 text-2xl font-medium text-white md:text-3xl lg:text-4xl">
          Got A Project Or A Partnership In Mind?
        </h1>
        <p className="mb-10 text-sm text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, iure
          adipisci fugit voluptates molestiae quos. Voluptate deserunt
          reiciendis dignissimos, eum nostrum laboriosam eligendi odit sint at.
          Dignissimos eius minima quam.
        </p>
        <Link href="/discuss" passHref>
          <a className="px-5 py-2 text-sm bg-white rounded-md text-primary">
            Let&apos;s discuss
          </a>
        </Link>
      </div>
      <GiDiscussion className="w-56 h-56 text-white" />
    </section>
  );
}
