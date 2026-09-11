import { Suspense } from 'react';
import SkillCard from './SkillCard';
import type { Skills } from '../types';

const skillData = async (): Promise<Skills[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

const Skill = () => {
  const skillDataPromiss = skillData();
  return (
    <section className=" container mx-auto">
      <div>
        <h1 className=" font-extrabold text-3xl ">
          Explore the
          <span className=" text-[#EC4899] font-extrabold">Technologies</span>
        </h1>
        <p className=" text-[#64748B] text-xl mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
        <Suspense fallback={<h1>Lodaing ...</h1>}>
          <SkillCard skillDataPromiss={skillDataPromiss}></SkillCard>
        </Suspense>
      </div>
    </section>
  );
};

export default Skill;
