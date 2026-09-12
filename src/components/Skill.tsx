import { Suspense } from 'react';
import type { Skills } from '../types';
import SkillCard from './SkillCard';

const skillDataPromise: Promise<Skills[]> = (async (): Promise<Skills[]> => {
  const response = await fetch('/data.json');

  if (!response.ok) {
    throw new Error(`Failed to load technology data (${response.status}).`);
  }

  return (await response.json()) as Skills[];
})();

interface SkillProps {
  selectedItems: Skills[];
  onAdd: (item: Skills) => void;
}

const Skill = ({ selectedItems, onAdd }: SkillProps) => {
  return (
    <section id="technologies" className="scroll-mt-24">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
          Explore the <span className="text-pink-500">Technologies</span>
        </h2>
        <p className="mt-1.5 text-xs text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <Suspense
        fallback={
          <div className="rounded-xl border border-slate-200 bg-white p-10 text-center text-sm text-slate-500">
            Loading technologies...
          </div>
        }
      >
        <SkillCard
          skillDataPromise={skillDataPromise}
          selectedItems={selectedItems}
          onAdd={onAdd}
        />
      </Suspense>
    </section>
  );
};

export default Skill;
