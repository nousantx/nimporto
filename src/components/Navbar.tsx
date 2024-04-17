import styler from "../utils/styler";

const Navbar = () => {
  styler();
  return (
    <header className="fixed t-0 l-0 w-full z-9999 ph-10vw pv-1rem back-c-#fbfcfa80">
      <h1 className="logo fs-1rem tc-[neutral-900]">NimPorto</h1>
    </header>
  );
};

export default Navbar;
