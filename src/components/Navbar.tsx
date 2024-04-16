import styler from "../utils/styler";

const Navbar = () => {
  styler();
  return (
    <header className="fixed t-0 w-full">
      <h1 className="logo fs-1rem tc-[primary-500]">NOuSantx</h1>
    </header>
  );
};

export default Navbar;
