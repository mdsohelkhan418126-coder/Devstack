import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Logo from '../assets/logo-text.png';

const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showToast = (message: string) => toast.info(message);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-0">
        <button
          type="button"
          className="text-slate-700 md:hidden"
          onClick={() => setOpen(value => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>

        <a href="#home" className="shrink-0">
          <img src={Logo} alt="Dev Stack" className="h-7 w-auto" />
        </a>

        <ul className="hidden items-center gap-7 text-xl font-medium text-slate-500 md:flex">
          {links.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={
                  link === 'Home'
                    ? 'text-pink-600'
                    : 'transition hover:text-pink-600'
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 text-xl">
          <button
            type="button"
            onClick={() => showToast('Sign in is ready for the next step.')}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => showToast('Sign up is ready for the next step.')}
            className="rounded-full bg-pink-600 px-4 py-2 font-semibold text-white shadow-sm transition hover:bg-pink-700"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-3 md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-600">
            {links.map(link => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className={
                    link === 'Home' ? 'font-semibold text-pink-600' : ''
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
