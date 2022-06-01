import Card from "@/Services/Card";
import Image from "next/image";
import React from "react";
import { shimmer, toBase64 } from "shimmer";

export default function services() {
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
            Our Amazing services
          </h1>
          <p className="mb-5 text-xs text-center sm:text-sm opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            laborum reprehenderit repudiandae rerum? Consectetur placeat
            excepturi porro unde repellat tempora!
          </p>
        </div>
      </section>
      <section className="relative grid w-full grid-cols-1 gap-10 p-5 my-10 min-h-60 md:px-10 md:grid-cols-2 lg:grid-cols-3">
        {Array(5)
          .fill()
          .map((_, i) => {
            return <Card key={i} />;
          })}
      </section>
    </div>
  );
}
