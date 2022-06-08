import Image from "next/image";
import Link from "next/link";
import { shimmer, toBase64 } from "shimmer";

const TopCard = () => {
  return (
    <div className="mx-auto text-accent">
      <div className="relative w-full overflow-hidden rounded-md h-60 mt-7 md:mt-0 md:h-80">
        <Image
          src="/assets/images/blake-wisz-tE6th1h6Bfk-unsplash.jpg"
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
      <div>
        <h1 className="my-2 text-lg font-medium">
          How to choose platform with which to create an online presence
        </h1>
        <p className="mb-2 text-xs md:text-md">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis harum
          inventore facilis ipsam sapiente natus iusto quod, voluptatibus rerum,
          voluptas placeat ex eaque consequatur quis pariatur. Recusandae illum
          architecto amet!
        </p>
        <p className="mb-3 text-xs opacity-70">Created today</p>
        <Link href="/" passHref>
          <a className="inline-block mb-5 text-sm transition-all duration-200 text-primary hover:underline md:text-md">
            Read
          </a>
        </Link>
        <span className="flex items-center justify-start space-x-2">
          <span className="relative inline-block w-10 h-10 overflow-hidden rounded-full">
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
            <h3 className="text-sm font-medium">George</h3>
            <p className="text-xs opacity-70">Managing Director</p>
          </span>
        </span>
      </div>
    </div>
  );
};

export default TopCard;
