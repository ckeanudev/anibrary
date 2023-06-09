import MainHolder from "@/components/MainHolder";
import Topbar from "@/components/Topbar";

export const metadata = {
  title: "AniBrary",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <main className="relative">
      <Topbar />
      <section className="h-[380px] w-full bg-[url('/images/main-wall.svg')] bg-cover bg-top flex justify-center items-center flex-col">
        <h1
          className="mt-16 text-5xl text-[#fff] font-bold text-center drop-shadow-lg"
          style={{ letterSpacing: "0.1em" }}>
          Welcome to Ani
          <strong className="text-[#25A18E] font-bold">Brary</strong>
        </h1>
        <p
          className="text-[#fff] text-xl text-center drop-shadow-lg"
          style={{ letterSpacing: "0.1em" }}>
          A website containing collections of anime
        </p>

        <p
          className="text-sm text-[#fff] mt-12 text-center drop-shadow-lg"
          style={{ letterSpacing: "0.05em" }}>
          Developed & Designed by Ckeanu powered by Jikan API
        </p>
      </section>

      <MainHolder />
    </main>
  );
}
