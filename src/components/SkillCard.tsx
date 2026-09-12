import { use } from 'react';
import type { Skills } from '../types';
import AddCart from './AddCart';

interface SkillProps {
  skillDataPromise: Promise<Skills[]>;
  selectedItems: Skills[];
  onAdd: (item: Skills) => void;
}

const SkillCard = ({ skillDataPromise, selectedItems, onAdd }: SkillProps) => {
  const skills = use(skillDataPromise);
  const selectedIds = new Set(selectedItems.map(item => item.id));

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {skills.map(item => (
        <AddCart
          key={item.id}
          item={item}
          selected={selectedIds.has(item.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
};

export default SkillCard;
