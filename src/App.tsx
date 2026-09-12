import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import type { Skills } from './types';
import Logo from './assets/logo-text.png';

const App = () => {
  const [selectedItems, setSelectedItems] = useState<Skills[]>([]);

  const addToStack = (item: Skills) => {
    const alreadySelected = selectedItems.some(
      selected => selected.id === item.id,
    );

    if (alreadySelected) {
      toast.warning(`${item.name} is already in your stack.`);
      return;
    }

    setSelectedItems(current => [...current, item]);
    toast.success(`${item.name} added to your stack.`);
  };

  const removeFromStack = (id: string) => {
    setSelectedItems(current => current.filter(item => item.id !== id));
  };

  const removeAll = () => {
    setSelectedItems([]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />

        <section className="mx-auto max-w-6xl px-5 pb-10 lg:px-0">
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
            <Skill selectedItems={selectedItems} onAdd={addToStack} />
            <Cart
              items={selectedItems}
              onRemove={removeFromStack}
              onRemoveAll={removeAll}
            />
          </div>
        </section>

        <footer id="contact" className="border-t border-slate-100 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-0">
            <div>
              <div className="flex items-center gap-2">
                <img src={Logo} alt="Dev Stack" className="h-6 w-auto" />
              </div>
              <p className="mt-3 max-w-xs text-[10px] leading-5 text-slate-400">
                Curate, compare, and build your ideal development stack.
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                Product
              </h3>
              <div className="mt-3 space-y-2 text-[10px] text-slate-400">
                <a className="block hover:text-pink-500" href="#technologies">
                  Technologies
                </a>
                <a className="block hover:text-pink-500" href="#projects">
                  Projects
                </a>
              </div>
            </div>

            <div id="about">
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                Company
              </h3>
              <div className="mt-3 space-y-2 text-[10px] text-slate-400">
                <a className="block hover:text-pink-500" href="#about">
                  About
                </a>
                <a className="block hover:text-pink-500" href="#contact">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-800">
                Legal
              </h3>
              <div className="mt-3 space-y-2 text-[10px] text-slate-400">
                <a className="block hover:text-pink-500" href="#privacy">
                  Privacy Policy
                </a>
                <a className="block hover:text-pink-500" href="#terms">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-[9px] text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:px-0">
              <p>© 2026 Dev Stack. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#privacy">Privacy</a>
                <a href="#terms">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <ToastContainer position="top-center" autoClose={2200} />
    </div>
  );
};

export default App;
