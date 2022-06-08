import Image from "next/image";
import Link from "next/link";
import { toBase64, shimmer } from "shimmer";

export default function Card() {
  return (
    <div className="w-full h-auto overflow-hidden rounded-md shadow-md">
      <span className="relative inline-block w-full h-36">
        <Image
          src="/assets/images/Home.png"
          alt="clients"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(300, 400)
          )}`}
        />
      </span>
      <span className="inline-block px-3 pb-3 text-md">
        <h1 className="mb-2 font-medium">Performance vs Beauty</h1>
        <span className="inline-block mb-3 space-x-1">
          <p className="inline text-xs">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            perferendis amet eligendi beatae placeat ea possimus aut repellat,
            vel neque...
          </p>
          <Link href="/" passHref>
            <a className="inline text-xs transition-all duration-200 text-primary hover:underline md:text-md">
              Read
            </a>
          </Link>
        </span>
        <span className="flex items-center justify-start space-x-2">
          <span className="relative inline-block w-8 h-8 overflow-hidden rounded-full">
            <Image
              src="/assets/images/blake-wisz-tE6th1h6Bfk-unsplash.jpg"
              alt="working"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(20, 20)
              )}`}
            />
          </span>
          <span>
            <h3 className="text-xs font-medium">George</h3>
            <p className="text-[10px] opacity-70">Managing Director</p>
          </span>
        </span>
      </span>
    </div>
  );
}
