const Hero = () => {
  return (
    <section className="my-10 ">
      <div className=" flex  items-center container mx-auto gap-30">
        <div >
          <div >
            <h1 className=" text-4xl font-extrabold mb-4 ">
              Build Your Ideal <br />
              <span className=" text-[#D81B7E]">Development Stack</span>
            </h1>
            <div className=" ">
              <p className=" text-sm tracking-tight w-3xl h-20 text-[#475569] mb-10 ">
                Explore frontend, backend, database, and tooling options,<br />
                compare them side by side, and put together the stack that fits
                your <br /> next project.
              </p>
            </div>
            <div className=" flex gap-4">
              <button className=" bg-[#F97316] text-white p-2 rounded-lg">
                Explore Technologies
              </button>
              <button className=" border border-gray-400 rounded-lg px-6 py-2">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex flex-col">
          <img src="./src/assets/banner-stack.png" alt=""className=" w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
