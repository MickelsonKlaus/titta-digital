import Image from "next/image";
import Link from "next/link";
import { toBase64, shimmer } from "shimmer";

export default function Card() {
  return (
    <div className="w-full overflow-hidden rounded-md shadow-md">
      <span className="relative inline-block w-full h-48">
        <video
          src="/assets/video/Protaroom.mp4"
          poster="/assets/images/placeholder.png"
          className="w-full h-full"
          controls
        ></video>
      </span>
      <span className="inline-block p-3">
        <h3 className="mb-3 font-medium text-md">Protaroom</h3>
        <p className="mb-5 text-xs md:text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
          maiores itaque ipsam, libero amet consequuntur fuga dolorem doloribus
          non. Fugit.
        </p>
        <Link href="/" passHref>
          <a className="inline-block text-sm transition-all duration-200 text-primary hover:underline md:text-md">
            Preview
          </a>
        </Link>
      </span>
    </div>
  );
}
