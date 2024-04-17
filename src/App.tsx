import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import styler from "./utils/styler";

function App() {
  styler();

  return (
    <>
      <Navbar />
      <section className="center flex-wrap jc-start gap-2rem w-full h-mn-100vh ph-10vw">
        <header className="flex col jc-center w-mx-600px">
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
        {/* <div className="relative pv-10vw"></div> */}
      </section>
      <section className="center col w-full ph-10vw pv-2rem bg-#0d0d0d dark">
        <h2 className="w-mx-600px">
          About <span className="tc-[primary-500]">Me</span>
        </h2>
      </section>
      <section className="center col w-full p-10vw bg-[neutral-100]">
        <header className="ta-center">
          <h2>Projects</h2>
          <p>Explore my featured works, website and design.</p>
        </header>
        <div className="w-full flex-wrap  ai-stretch gap-1rem mt-1rem">
          <Project
            title="TenoxUI CSS Framework"
            desc="An utility-first CSS framework for web development, maintained by myself."
            thumb="https://repository-images.githubusercontent.com/726043678/0c04e550-aebf-41d5-a0c6-ff594d15cdea"
            tags={["html/css", "framework", "typescript"]}
          />
          <Project
            title="TenoxUI CSS Framework"
            desc="An utility-first CSS framework for web development, maintained by myself."
            thumb="https://tenoxui.web.app/img/tenoxui.svg"
          />
          <Project title="Hello World!" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
