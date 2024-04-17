const Home = () => {
  return (
    <>
      <section className="center flex-wrap gap-2rem w-full h-mn-100vh ph-10vw">
        <header className="fx-400px h-mn-80vh flex col jc-center w-mx-600px">
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
        <div className="fx-400px relative pv-10vw none">
          {/* <div className="w-full bg-[primary-500] h-10px"></div>
      <div className="w-full bg-[primary-500] h-10px mt-10px"></div> */}
          <header>
            <h2 className="">Service i provide</h2>
            <p>Things you will get</p>
          </header>
          <div className="flex flex-wrap gap-1rem ai-stretch bs-solid bw-0 bw-left-2px bc-[primary-500] p-1rem mt-1rem">
            <div className="fx-200px center tc-[neutral-900] gap-8px jc-start">
              <span className="ms-round bg-[primary-500] box-2rem br-8px fs-18px center">
                bolt
              </span>
              <p className="tc-inherit">Fast and website</p>
            </div>
            <div className="fx-200px center tc-[neutral-900] gap-8px jc-start">
              <span className="ms-round bg-[primary-500] box-2rem br-8px fs-18px center">
                keyboard
              </span>
              <p className="tc-inherit">Less and Clean Code</p>
            </div>
            <div className="fx-200px center tc-[neutral-900] gap-8px jc-start">
              <span className="ms-round bg-[primary-500] box-2rem br-8px fs-18px center">
                gesture
              </span>
              <p className="tc-inherit">From line to creativity</p>
            </div>
            <div className="fx-200px center tc-[neutral-900] gap-8px jc-start">
              <span className="ms-round bg-[primary-500] box-2rem br-8px fs-18px center">
                devices
              </span>
              <p className="tc-inherit">Responsive Design</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
