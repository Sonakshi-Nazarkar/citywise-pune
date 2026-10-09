import React from 'react';
import { PlaceCategory } from '../../types';
import { Sparkles, Utensils, Landmark, Bed, Wallet, MapPin } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: PlaceCategory;
  onSelectCategory: (cat: PlaceCategory) => void;
  counts: Record<PlaceCategory, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
  counts
}) => {
  const categories: { id: PlaceCategory; label: string; icon: React.ElementType }[] = [
    { id: 'all', label: 'All Places', icon: Sparkles },
    { id: 'historical', label: 'Historical Landmarks', icon: Landmark },
    { id: 'food', label: 'Local Food & Cafes', icon: Utensils },
    { id: 'budget', label: 'Budget & Free Gems', icon: Wallet },
    { id: 'attraction', label: 'Attractions & Culture', icon: MapPin },
    { id: 'hotel', label: 'Hotels & Stays', icon: Bed },
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isSelected = selectedCategory === cat.id;
        const count = counts[cat.id] ?? 0;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
              isSelected
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
            }`}
          >
            <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-slate-500'}`} />
            <span>{cat.label}</span>
            <span
              className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};
