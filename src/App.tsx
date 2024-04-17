import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styler from "./utils/styler";

function App() {
  styler();

  return (
    <>
      <Navbar />
      <section className="center flex-wrap gap-2rem w-full h-mn-100vh ph-10vw">
        <header className="fx-400px flex col jc-center w-mx-600px">
          <p className="ls-1px">Hello Everyone 👋</p>
          <h1 className="fs-2rem fw-400 tc-[neutral-600]">
            I'm <span className="fw-600 tc-[neutral-900]">NOuSantx</span>. I'm{" "}
            <span className="tc-[neutral-900]">Front-End Web Developer</span> &{" "}
            <span className="tc-[neutral-900]">UI/UX Designer</span>.
          </h1>
          <div className="flex ai-center gap-6px mt-1.5rem">
            <button className="btn bg-[primary-500] tc-[neutral-900] rounded-full">
              Download CV
            </button>
            <a
              href="https://linkedin.com/in/nousantx"
              className="btn btn-primary rounded-full center gap-6px"
            >
              Let's Connect on
              <i className="txi ti-linkedin fs-inherit fs-14px"></i>
            </a>
          </div>
        </header>
        {/* <div className="fx-400px relative pv-10vw"></div> */}
      </section>
      <section className="dark center col back-c-#0d0d0d tc-[neutral-100] w-full p-10vw">
        <header className="ta-center">
          <h2>Projects</h2>
          <p className="tc-[neutral-300]">
            Explore my featured works, website and design.
          </p>
        </header>
        <div className="w-full flex-wrap ai-stretch gap-1rem mt-1rem">
          <div className="fx-300px bs-solid bw-1px bc-[neutral-900] bg-none br-0.5rem over-hidden">
            <div className="w-full bg-[primary-500] ratio-video"></div>
            <header className="p-1rem">
              <h3 className="fs-1.2rem">TenoxUI CSS Framework</h3>
              <p className="fs-12px mt-6px">
                An utility-first CSS framework for web development, maintained
                by myself.
              </p>
            </header>
            <div className="center flex-wrap gap-8px jc-end ph-1rem pv-1rem">
              <a
                href="#"
                className="btn center bg-[primary-500] tc-[neutral-900] rounded-full gap-4px"
              >
                <i className="txi ti-web"></i>
                Docs
              </a>
              <a
                href="#"
                className="btn center bg-[primary-500] tc-[neutral-900] rounded-full gap-4px"
              >
                <i className="txi ti-github_square"></i>
                GitHub
              </a>
            </div>
          </div>
          <div className="fx-300px bg-red p-1rem"></div>
          <div className="fx-300px bg-red p-1rem"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
