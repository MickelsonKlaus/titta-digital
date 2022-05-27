import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="p-3 border rounded-md shadow-md w-80 border-accent">
      <h2 className="font-medium text-md">Web development</h2>
      <p className="my-3 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
        voluptate voluptatibus ducimus in quo tempora repellendus, adipisci
        nesciunt ea unde. Quibusdam sunt laboriosam dicta animi vel quo quis!
        Enim, beatae.
      </p>
      <span className="flex items-center justify-start mt-5 space-x-2">
        <span className="relative inline-block w-12 h-12 overflow-hidden rounded-full">
          <Image
            src="/assets/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg"
            alt="clients"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </span>
        <span>
          <h3 className="text-sm font-medium">Mr. Brad</h3>
          <p className="text-xs">CEO TeenTechAfrica</p>
        </span>
      </span>
    </div>
  );
}
