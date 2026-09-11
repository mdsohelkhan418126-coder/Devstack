import { use } from 'react';
import type { Skills } from '../types';
import { IoIosStar } from 'react-icons/io';
interface SkillProps {
  skillDataPromiss: Promise<Skills[]>;
}
const SkillCard = ({ skillDataPromiss }: SkillProps) => {
  const skill = use(skillDataPromiss);
  console.log(skill);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {skill.map((item: Skills, index: number) => (
        <div key={index}>
          <div className=" p-5 m-5 border border-gray-300/50 rounded-2xl">
            <div className=" flex justify-between items-center">
              <img src={item.icon} alt="" className=" w-10" />
              <button className=" text-[#0EA5E9] font-semibold border border-gray-200 bg-gray-300 rounded-lg px-4 py-2">
                {item.badge}
              </button>
            </div>
            <h1 className=" font-bold text-2xl">{item.name}</h1>
            <p>{item.description}</p>
            <div className=" flex justify-between items-center mt-4">
              <button>{item.category}</button>
              <button>{item.difficulty}</button>
              <div className=" flex justify-center items-center gap-2">
                <IoIosStar className="text-[#FBBF24]  " />
                <p>{item.rating}</p>
              </div>
            </div>
            <button className=" bg-black text-white w-full font-medium mt-4 rounded-3xl p-3 cursor-pointer">
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
