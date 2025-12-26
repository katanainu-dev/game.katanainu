import BannerTitle from "./BannerTitle";

const Banner = () => {
  return (
    <section className="overflow-hidden relative flex bg-[#06171E] bg-[url('/assets/images/banner/large.webp')] bg-cover bg-right-top sm:bg-right bg-no-repeat w-full min-h-[400px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[650px] xl:min-h-[800px] 2xl:min-h-[900px]">
      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-transparent z-10" />
      {/* kainu text element */}
      <div className="bg-[url('/assets/images/banner/kainu.png')] bg-no-repeat bg-contain absolute top-0 w-full h-full mx-auto max-w-[2000px]" />
      {/* main content */}
      <div className=" main-container-2 banner__content flex flex-col justify-center w-full">
        {/* banner container */}
        <div className="pt-16 lg:pt-[76px] 2xl:pt-20 flex flex-col sm:flex-row justify-between items-center gap-7 sm:gap-8 md:gap-9 lg:gap-0">
          <div className="relative z-20 max-w-[925px]">
            <BannerTitle />
          </div>

          {/* banner image */}
          {/* <div className="lg:absolute right-0">
            <BannerImage />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
