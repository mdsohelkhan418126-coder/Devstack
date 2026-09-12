import { toast } from 'react-toastify';
import heroPng from '../assets/banner-stack.png';

const Hero = () => {
  const scrollToTechnologies = () => {
    document
      .getElementById('technologies')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="mx-auto max-w-6xl px-5 py-14 lg:px-0 lg:py-20"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 md:text-5xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={scrollToTechnologies}
              className="rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </button>
            <button
              type="button"
              onClick={() =>
                toast.info('Choose technologies below to build your stack.')
              }
              className="rounded-md border border-slate-300 px-5 py-2.5 text-xs font-semibold text-slate-700 transition hover:border-pink-400 hover:text-pink-600"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={heroPng}
            alt="Development stack illustration"
            className="w-72 max-w-full md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
