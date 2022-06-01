import Image from "next/image";
import Link from "next/link";
import { toBase64, shimmer } from "shimmer";

export default function LatestBlogCard() {
  return (
    <div className="overflow-hidden rounded-md shadow-md w-80">
      <span className="relative inline-block w-full h-48">
        <Image
          src="/assets/images/nextjs or reactjs website or app.png"
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
      <span className="inline-block p-2">
        <h3 className="mb-3 font-medium text-md">Performance vs Beauty</h3>
        <p className="mb-5 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          maiores itaque ipsam, libero amet consequuntur fuga dolorem doloribus
          non. Fugit.
        </p>
        <Link href="/" passHref>
          <a className="inline-block text-sm underline md:text-md">Read</a>
        </Link>
      </span>
    </div>
  );
}
