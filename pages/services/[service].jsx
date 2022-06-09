import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { shimmer, toBase64 } from "shimmer";

function Service() {
  let service = useRouter().query?.service;

  return (
    <section className="relative p-5 mb-10 min-h-60 md:px-10">
      <p className="text-xs opacity-70">Service &gt; {service}</p>
      <div className="mx-auto mt-3 lg:max-w-3xl">
        <h1 className="mb-2 text-xl font-medium md:text-2xl">
          Website Design and Development service
        </h1>
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
        <h2 className="mb-2 font-medium text-md md:text-lg">
          Technologies we use
        </h2>
        <ul className="list-disc list-inside">
          <li>Reactjs</li>
          <li>Nextjs</li>
        </ul>
      </div>
    </section>
  );
}

export default Service;
