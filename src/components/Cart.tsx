import { FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';
import type { Skills } from '../types';

interface CartProps {
  items: Skills[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Cart = ({ items, onRemove, onRemoveAll }: CartProps) => {
  const removeItem = (item: Skills) => {
    onRemove(item.id);
    toast.success(`${item.name} removed from your stack.`);
  };

  const removeAll = () => {
    if (items.length === 0) return;
    onRemoveAll();
    toast.success('All technologies removed from your stack.');
  };

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:sticky lg:top-24 lg:h-fit">
      <div className="border-b border-slate-100 pb-3">
        <h2 className="text-sm font-bold text-slate-900">Your Stack</h2>
        <p className="mt-1 text-[9px] text-slate-400">
          {items.length} Technology{items.length === 1 ? '' : 'ies'} Selected
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-12 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-lg">
            🧩
          </div>
          <p className="mt-3 text-xs font-semibold text-slate-500">
            No technologies selected
          </p>
          <p className="mt-1 text-[10px] leading-4 text-slate-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-2 py-3">
          {items.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-2 rounded-lg border border-slate-100 p-2"
            >
              <img src={item.icon} alt="" className="h-7 w-7 object-contain" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-slate-800">
                  {item.name}
                </p>
                <p className="text-[8px] text-slate-400">{item.category}</p>
              </div>
              <button
                type="button"
                onClick={() => removeItem(item)}
                className="p-1 text-slate-300 transition hover:text-red-500"
                aria-label={`Remove ${item.name}`}
              >
                <FaTimes size={10} />
              </button>
            </div>
          ))}
        </div>
      )}

      {items.length > 0 && (
        <button
          type="button"
          onClick={removeAll}
          className="mt-2 w-full rounded-lg border border-red-100 py-2 text-[10px] font-semibold text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default Cart;
