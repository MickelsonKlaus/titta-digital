import Card from "@/Portfolio/Card";
import Image from "next/image";
import { shimmer, toBase64 } from "shimmer";

export default function portfolio() {
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
            Portfolio
          </h1>
          <p className="mb-5 text-xs text-center sm:text-sm opacity-70">
            some of our selected projects we&apos;ve worked on.
          </p>
        </div>
      </section>
      <section className="relative grid w-full grid-cols-1 gap-10 p-5 my-10 min-h-60 md:px-14 md:grid-cols-2 lg:grid-cols-3">
        {Array(3)
          .fill()
          .map((_, i) => (
            <Card key={i} />
          ))}
      </section>
    </div>
  );
}
