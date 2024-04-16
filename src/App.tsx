import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import styler from "./utils/styler";
function App() {
  styler();

  return (
    <>
      <Navbar />
      <section className="center w-full h-mn-100vh p-10vw">
        <header>
          <p className="ls-1px">Hello Everyone 👋</p>
          <h1 className="fs-2rem fw-500">
            I'm <span className="fw-700 tc-[primary-500]">NOuSantx</span>. I'm a
            Front-End Web Developer & UI/UX Designer.
          </h1>
          <div className="flex ai-center gap-1rem mt-1.5rem">
            <button className="btn bg-[primary-500] tc-[neutral-900] rounded-full">
              Download CV
            </button>
            <a
              href="https://linkedin.com/in/nousantx"
              className="btn bc-[primary-500] tc-[primary-500] rounded-full"
            >
              Let's Connect
            </a>
          </div>
        </header>
      </section>
      <Footer />
    </>
  );
}

export default App;
