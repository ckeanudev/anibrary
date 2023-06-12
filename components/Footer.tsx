const Footer = () => {
  return (
    <footer className="bg-[#101314] flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between pt-6 px-6 pb-8">
      <p className="text-white">
        Developed & Designed by{" "}
        <a
          className="text-[#25A18E] font-semibold"
          href="https://github.com/ckeanudev"
          target="_blank"
          rel="noopener noreferrer">
          Ckeanu
        </a>{" "}
      </p>
      <p className="text-white">
        Powered by{" "}
        <a
          className="text-[#25A18E] font-semibold"
          href="https://jikan.moe"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          Jikan API{" "}
        </a>
      </p>
    </footer>
  );
};

export default Footer;
