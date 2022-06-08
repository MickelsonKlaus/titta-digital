import TopCard from "@/Blog/TopCard";
import Card from "@/Blog/Card";
import Image from "next/image";
import { shimmer, toBase64 } from "shimmer";

export default function blog() {
  return (
    <div>
      <section className="relative h-60">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/assets/images/path.png"
            alt="path"
            layout="fill"
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
        <div className="relative z-10 w-full max-w-3xl px-5 pt-10 mx-auto text-white">
          <h1 className="mb-5 text-3xl font-medium text-center sm:text-4xl md:text-5xl">
            Blog
          </h1>
          <p className="mb-5 text-xs text-center sm:text-sm opacity-70">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
            consequatur?
          </p>
        </div>
      </section>
      <section className="w-full p-5 my-5 md:my-10 md:px-10">
        <p className="px-3 py-1 text-xs rounded-md bg-primary/50 w-fit">
          Newest
        </p>
        <div className="relative w-full pb-5 space-y-10 border-b md:mt-5 md:flex md:justify-between md:items-start md:space-y-0 md:space-x-10 border-accent">
          {Array(2)
            .fill()
            .map((_, i) => (
              <TopCard key={i} />
            ))}
        </div>
        <div className="relative grid w-full grid-cols-1 gap-5 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array(5)
            .fill()
            .map((_, i) => (
              <Card key={i} />
            ))}
        </div>
      </section>
    </div>
  );
}
