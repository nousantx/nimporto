import styler from "../utils/styler";

const Footer = () => {
  styler();
  return (
    <>
      <footer className="back-c-#0d0d0d dark ph-10vw pv-2rem center col none">
        <div className="w-full flex-wrap center ai-stretch gap-2rem">
          <header className="fx-200px">
            <h2 className="fw-500 fs-1.6rem">
              Thanks for your{" "}
              <span className="tc-[primary-500]">attention!</span>
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
              <span className="ms-sharp tc-[primary-500] fs-16px">
                pin_drop
              </span>
              Malang Regency, East Java, ID
            </p>
          </div>
        </div>
        <p className="fs-12px mt-2rem">
          &copy; 2024 NOuSantx. Built with TenoxUI.
        </p>
      </footer>
      <footer className="dark w-full pv-2rem ph-10vw back-c-#0d0d0d flex-wrap ai-stretch gap-2rem tc-[neutral-100]">
        {/* Row one */}
        <header className="fx-400px">
          {/* <div className="center jc-start gap-4px">
            <span className="ms-line tc-[primary-500] fs-30px">ssid_chart</span>
            <h1 className="fs-1.4em center">
              Contact<span className="tc-[primary-500]">.</span>
            </h1>
          </div> */}
          <div className="flex col ai-start jc-center gap-8px">
            {/* <h2 className="fw-500 fs-1.3rem">Get In Touch?</h2> */}
            <h1 className="fs-1.6em mb-8px">
              Get in touch<span className="tc-[primary-500]">.</span>
            </h1>
            <p className="center gap-8px fs-14px">
              <span className="ms-sharp tc-[primary-500] fs-16px">mail</span>
              nousantx@gmail.com
            </p>
            <p className="center gap-8px fs-14px">
              <span className="ms-sharp tc-[primary-500] fs-16px">phone</span>
              +62 81 515 193 972
            </p>
            <p className="center gap-8px fs-14px">
              <span className="ms-sharp tc-[primary-500] fs-16px">
                pin_drop
              </span>
              Malang Regency, East Java, ID
            </p>
          </div>
        </header>
        <div className="footer-links">
          <div className="fx-175px">
            <h2 className="fs-16px fw-500">Social</h2>
            <a
              target="_blank"
              href="https://github.com/nousantx"
              className=" mt-12px"
            >
              GitHub
            </a>
            <a target="_blank" href="https://linkedin.com/in/nousantx">
              LinkedIn
            </a>
            <a target="_blank" href="https://instagram.com/nousantx">
              Instagram
            </a>
            <a target="_blank" href="https://x.com/nousantx">
              Twitter
            </a>
          </div>
          <div className="fx-175px">
            <h2 className="fs-16px fw-500">Projects</h2>
            <a
              target="_blank"
              href="https://github.com/tenoxui/css"
              className=" mt-12px"
            >
              TenoxUI CSS Framework
            </a>
            <a
              target="_blank"
              href="https://github.com/nousantx/tenoxui-website"
            >
              TenoxUI Docs
            </a>
            <a target="_blank" href="https://github.com/nousantx/Cliff-UI">
              Cliff UI Components
            </a>
            <a target="_blank" href="https://github.com/nousantx/React-Styler">
              React Styler
            </a>
          </div>
          <div className="fx-175px">
            <h2 className="fs-16px fw-500">Try TenoxUI</h2>
            <a
              target="_blank"
              href="https://github.com/nousantx/tui-template-react"
              className=" mt-12px"
            >
              React
            </a>
            <a
              target="_blank"
              href="https://github.com/nousantx/tui-template-react"
            >
              Vue
            </a>
            <a
              target="_blank"
              href="https://github.com/nousantx/tui-template-react"
            >
              Svelte
            </a>
            <a
              target="_blank"
              href="https://github.com/nousantx/tui-template-react"
            >
              Solid
            </a>
          </div>
        </div>
        <p className="fx-100% tc-[neutral-300] fs-12px dark back-c-#0d0d0d">
          &copy; 2024 NOuSantx. Built with{" "}
          <a
            target="_blank"
            href="https://tenoxui.web.app"
            className="tc-[primary-500]"
          >
            TenoxUI
          </a>
          .
        </p>
      </footer>
    </>
  );
};
export default Footer;
