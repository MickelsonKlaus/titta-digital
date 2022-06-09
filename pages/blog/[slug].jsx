import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsShareFill,
  BsTwitter,
} from "react-icons/bs";
import { toBase64, shimmer } from "shimmer";

const Slug = () => {
  let slug = useRouter().query?.slug;

  return (
    <section className="relative p-5 text-accent md:px-10">
      <p className="text-xs opacity-70">Blog &gt; {slug}</p>
      <article className="mx-auto mt-3 lg:max-w-3xl">
        <p className="text-xs md:text-sm">Posted today</p>
        <h1 className="mb-2 text-xl font-medium md:text-2xl">
          Should you go with a mobile app or website first?
        </h1>
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
        <div className="relative w-full mt-5 overflow-hidden rounded-md h-52 md:h-80">
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
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          aliquam quibusdam eaque doloremque? Ratione quos aperiam dolorum, sit
          porro commodi! Optio adipisci dolore rerum, natus incidunt
          perspiciatis libero ab ratione?
        </p>
        <p className="my-5 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          nisi qui sed sit necessitatibus sequi cupiditate ducimus excepturi
          sint. Sed blanditiis fugiat, facilis quidem, esse quis pariatur
          molestias magnam, facere corporis culpa harum reiciendis. Quae magnam
          provident nostrum ea dolores aliquam, doloremque repellat dolor sunt
          numquam in aut placeat odio? Laboriosam, accusantium? Quis cum
          inventore id sapiente explicabo corrupti nisi cumque, itaque eum dolor
          culpa enim asperiores molestias, placeat deserunt ea ratione ipsum
          eveniet nulla? Minima eligendi sit error debitis nobis quos id eius
          earum sequi doloribus aspernatur eveniet iure assumenda reprehenderit,
          eos nihil deleniti soluta. Enim voluptate itaque laborum.
        </p>
      </article>
      <fieldset className="w-full mt-10 mb-5 border-0 border-t-2">
        <p className="mt-2 text-sm text-center">Share</p>
        <legend className="px-2 mx-auto w-fit">
          <span className="flex items-center justify-start space-x-5">
            <Link href="https://facebook.com/" passHref target="_blank">
              <a title="Facebook share">
                <BsFacebook className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="https://twitter.com/" passHref target="_blank">
              <a className="Twitter share">
                <BsTwitter className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="https://instagram.com/" passHref target="_blank">
              <a title="Instagram share">
                <BsInstagram className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <Link href="https://linkedin.com" passHref target="_blank">
              <a title="LinkedIn share">
                <BsLinkedin className="w-5 h-5 text-accent" />
              </a>
            </Link>
            <button title="copy link">
              <BsShareFill className="w-5 h-5 text-accent" />
            </button>
          </span>
        </legend>
      </fieldset>
    </section>
  );
};

export default Slug;
