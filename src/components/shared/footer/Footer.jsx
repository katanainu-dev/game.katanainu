import FooterContainer from "./FooterContainer";

export default function Footer() {
  return (
    <section className="py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 2xl:py-20 bg-black isolate relative">
      {/* content */}
      <div className="main-container-2 max-screen-width relative z-40">
        <FooterContainer />
      </div>
    </section>
  );
}
