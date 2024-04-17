import styler from "../utils/styler";

const Footer = () => {
  styler();
  return (
    <footer className="back-c-#0d0d0d dark ph-10vw pv-2rem center col">
      <div className="w-full flex-wrap center ai-stretch gap-2rem">
        <header className="fx-200px">
          <h2 className="fw-500 fs-1.6rem">
            Thanks for your <span className="tc-[primary-500]">attention!</span>
          </h2>
          <p className="fs-14px mt-4px">
            Let's work on a project together next time :D
          </p>
        </header>
        <div className="fx-200px flex col ai-start jc-center gap-8px">
          <h2 className="fw-500 fs-1.3rem">Get In Touch?</h2>
          <p className="center gap-8px fs-14px">
            <span className="ms-sharp tc-[primary-500] fs-16px">mail</span>
            nousantx@gmail.com
          </p>
          <p className="center gap-8px fs-14px">
            <span className="ms-sharp tc-[primary-500] fs-16px">phone</span>
            +62 81 515 193 972
          </p>
          <p className="center gap-8px fs-14px">
            <span className="ms-sharp tc-[primary-500] fs-16px">pin_drop</span>
            Malang Regency, East Java, ID
          </p>
        </div>
      </div>
      <p className="fs-12px mt-2rem">
        &copy; 2024 NOuSantx. Built with TenoxUI.
      </p>
    </footer>
  );
};

export default Footer;
