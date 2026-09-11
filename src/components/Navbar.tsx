const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 container mx-auto py-6">
      <div className=" flex justify-between items-center">
        <img src="/src/assets/logo-text.png" alt="" />
        <ul className=" flex  justify-center gap-6">
          <li>
            <a href="#" className=" text-[#D91B7E]">
              Home
            </a>
          </li>
          <li>
            <a href="#">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className=" flex items-center gap-6 cursor-pointer">
          <button>Sign In</button>
          <button className=" bg-[#D91B7E] text-white font-semibold rounded-full px-4 py-2 ">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
