import Badges from "./components/Badge";
import Footer from "./components/Footer";
import Project from "./components/Project";
import { projects } from "./components/projects";
import styler from "./utils/styler";

function App() {
  styler();
  return (
    <>
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
        <header className="ta-justify">
          <h2>About Me</h2>
          <p className="fs-14px tc-[neutral-400] mt-6px lh-1.4">
            {/* About <span className="tc-[primary-500]">Me</span> */}
            My name is Nur Ikhsan Majid a.k.a{" "}
            <span className="tc-[neutral-100] fw-500">NOuSantx</span>. I'm a{" "}
            <span className="tc-[neutral-100] fw-500">
              Front-End Developer, UI/UX Designer, and TenoxUI CSS Framework
              Founder/Maintainer
            </span>
            . With over 2 years of experience in building responsive and dynamic
            frontend design and web application. Proficient in using front-end
            tools such as{" "}
            <span className="tc-[neutral-100] fw-500">
              HTML, CSS, JavaScript, TypeScript, ReactJS, Vue, Git, and More
            </span>
            . Solving problems and creating user-friendly design is my
            responsibility.
          </p>
        </header>
        <div className="w-full flex-wrap gap-8px mt-2rem">
          <Badges />
        </div>
      </section>
      <section className="center col w-full p-10vw bg-[neutral-100]">
        <header className="ta-center">
          <h2>Projects</h2>
          <p>Explore my featured works, website and design.</p>
        </header>
        <div className="w-full flex-wrap ai-stretch gap-1rem mt-1rem">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
