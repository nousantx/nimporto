import styler from "../utils/styler";

const Footer = () => {
  styler();
  return (
    <footer className="back-c-#0d0d0d dark ph-10vw pv-2rem center col">
      <div className="w-full flex col gap-1rem">
        <header className="ta-center">
          <h1>
            Thanks for your <span className="tc-[primary-500]">attention!</span>
          </h1>
          <p>Let's work on a project together next time :D</p>
        </header>
        <div className="flex-wrap gap-1rem mt-3rem none">
          <div className="fx-200px p-2rem bg-red"></div>
          <div className="fx-200px p-2rem bg-red"></div>
          <div className="fx-200px p-2rem bg-red"></div>
          <div className="fx-200px p-2rem bg-red"></div>
        </div>
      </div>
      <p className="fs-12px mt-2rem">
        &copy; 2024 NOuSantx. Built with TenoxUI.
      </p>
    </footer>
  );
};

export default Footer;
