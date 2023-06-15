import Footer from "@/components/Footer";
import MainHolder from "@/components/MainHolder";

export default function Home() {
  return (
    <main className="relative bg-[#161A1D]">
      <section className="bg-[#161A1D] h-[180px] md:h-[260px]  xl:h-[380px] w-full bg-[url('/images/animeinfo-wall.svg')] bg-cover bg-center flex justify-center items-center flex-col">
        <h1
          className="mt-10 md:mt-16 text-[26px] md:text-4xl xl:text-5xl text-[#fff] font-bold text-center drop-shadow-lg"
          style={{ letterSpacing: "0.1em" }}>
          Welcome to Ani
          <strong className="text-[#25A18E] font-bold">Brary</strong>
        </h1>
        <p
          className="text-[#fff] text-sm md:text-base xl:text-xl text-center drop-shadow-lg"
          style={{ letterSpacing: "0.1em" }}>
          A website containing collections of anime
        </p>

        <p
          className="text-[10px] md:text-xs xl:text-sm text-[#fff] mt-3 md:mt-8 xl:mt-12 text-center drop-shadow-lg"
          style={{ letterSpacing: "0.05em" }}>
          Developed & Designed by Ckeanu | Powered by Jikan API
        </p>
      </section>

      <MainHolder />

      <Footer />
    </main>
  );
}
