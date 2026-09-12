import { IoIosStar } from 'react-icons/io';
import type { Skills } from '../types';

interface AddCartProps {
  item: Skills;
  selected: boolean;
  onAdd: (item: Skills) => void;
}

const AddCart = ({ item, selected, onAdd }: AddCartProps) => {
  return (
    <article className="flex min-h-71.25 flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start font-bold justify-between gap-6">
        <img
          src={item.icon}
          alt={item.name}
          className="h-9 w-9 object-contain"
        />
        <span className="rounded-full bg-slate-50 px-2 py-1 text-[9px] font-semibold text-pink-500">
          {item.badge}
        </span>
      </div>

      <h3 className="mt-3 text-base font-bold text-slate-900">{item.name}</h3>
      <p className="mt-2 line-clamp-3 text-[11px] leading-5 text-slate-500">
        {item.description}
      </p>

      <div className="mt-auto grid grid-cols-[1fr_1fr_auto] items-center gap-2 pt-4 text-[9px] text-slate-500">
        <span className="rounded-md bg-slate-50 px-2 py-1">
          {item.category}
        </span>
        <span className="rounded-md bg-slate-50 px-2 py-1">
          {item.difficulty}
        </span>
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <IoIosStar className="text-amber-400" />
          {item.rating}
        </span>
      </div>

      <button
        type="button"
        disabled={selected}
        onClick={() => onAdd(item)}
        className={`mt-3 w-full rounded-lg py-2.5 text-[10px] font-semibold transition ${
          selected
            ? 'cursor-not-allowed bg-emerald-50 text-emerald-600'
            : 'bg-slate-950 text-white hover:bg-pink-600'
        }`}
      >
        {selected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </article>
  );
};

export default AddCart;
