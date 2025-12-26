import Image from "next/image";

export default function MediaPoster({ data }) {
  const { image, title, date } = data;
  return (
    <div className="relative select-none cursor-pointer">
      <Image src={image} alt={title} width={370} height={220} />

      {/* content */}
      <div className="absolute bottom-3 left-4 flex flex-col">
        <p className="font-tahomaBold font-bold gradient-text text-sm sm:text-xs 2xl:text-sm">
          {title}
        </p>
        <p className="font-tahoma text-white text-xs sm:text-[0.625em] 2xl:text-xs">
          {date}
        </p>
      </div>
    </div>
  );
}
