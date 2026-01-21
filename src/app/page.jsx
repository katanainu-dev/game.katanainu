import Banner from "@/components/banner/Banner";
// import SecondBanner from "@/components/banner/SecondBanner";
import Brand from "@/components/Brand";
import ChoosePlayer from "@/components/ChoosePlayer";
import Media from "@/components/media/Media";
import PartneredLogo from "@/components/partner/PartneredLogo";
import PlayClosedBeta from "@/components/PlayClosedBeta";
import Register from "@/components/register/Register";
import RegisterTwo from "@/components/register/RegisterTwo";
// import Requirements from "@/components/Requirements";
// import Trailers from "@/components/trailers/Trailers";
//import WhereToBuyToken from "@/components/WhereToBuyToken";
//import WinBySharing from "@/components/WinBySharing";

export default function Home() {
  return (
    <main>
      {/* <SecondBanner /> */}
      <Banner />
      <PartneredLogo />
      {/* <WinBySharing /> */}
      <Register />
      <div className="bg-[url('/assets/images/bg-large.webp')] bg-cover z-[1] relative">
        <Brand />
        <PlayClosedBeta />
        <Media />
      </div>
      
      <div className="bg-[url('/assets/images/background-2.webp')] bg-no-repeat bg-cover z-[1] relative">
        <ChoosePlayer />
      </div>
      <RegisterTwo />
      {/* <WhereToBuyToken /> */}
    </main>
  );
}
