import MediaContent from "./MediaContent";

export default function Media() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 isolate relative">
      {/* content */}
      <div className="flex flex-col items-center space-gap-1 main-container relative z-40 gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8">
        {/* title */}
        <h2 className="uppercase text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] 2xl:text-5xl text-white font-jost font-bold">
          <span className="gradient-text">KATANA INU</span> MEDIA
        </h2>

        {/* media content */}
        <MediaContent />
      </div>
    </section>
  );
}
