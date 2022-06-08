import TestimonialCard from "@/TestimonialCard";
import Image from "next/image";
import { toBase64, shimmer } from "shimmer";

export default function about() {
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
            About us
          </h1>
          <p className="mb-5 text-xs text-center sm:text-sm opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            laborum reprehenderit repudiandae rerum? Consectetur placeat
            excepturi porro unde repellat tempora!
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center justify-between w-full p-5 space-y-5 md:flex-row md:px-10 md:space-y-0 md:space-x-10 my-10">
        <div>
          <h1 className="mb-3 text-xl md:text-2xl">Overview of our Company</h1>
          <p className="my-3 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione fugit reprehenderit unde deleniti, illum neque
            dolores hic amet veritatis?
          </p>
          <p className="my-3 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt,
            doloribus iste consequuntur porro est tempore sequi suscipit minus
            cumque officiis.
          </p>
        </div>
        <div className="relative top-0 left-0 w-full rounded-md h-60 md:h-80 overflow-hidden">
          <Image
            src="/assets/images/marissa-grootes--837JygbCJo-unsplash.jpg"
            alt="overview"
            layout="fill"
            priority
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
      </section>
      <section className="flex flex-col items-center justify-between w-full p-5 space-y-5 md:flex-row-reverse md:space-y-0 md:px-10 my-10">
        <div>
          <h1 className="mb-3 text-xl md:text-2xl">
            We are here to always help you
          </h1>
          <p className="my-3 text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ratione fugit reprehenderit unde deleniti, illum neque
            dolores hic amet veritatis?
          </p>
          <p className="my-3 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            quam? Illum non voluptate voluptatibus suscipit expedita impedit,
            dolorum enim laudantium minima dolores in eligendi quo ducimus
            consequatur dolor? Ex, vel.
          </p>
        </div>
        <div className="relative top-0 left-0 w-full rounded-md h-60 md:h-80 overflow-hidden md:mr-10">
          <Image
            src="/assets/images/austin-distel-rxpThOwuVgE-unsplash.jpg"
            alt="overview"
            layout="fill"
            priority
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
        </div>
      </section>
      <section className="mb-10 relative w-full px-5 pb-5 md:px-10 min-h-fit">
        <h1 className="mb-5 text-xl md:text-2xl">
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
    </div>
  );
}
