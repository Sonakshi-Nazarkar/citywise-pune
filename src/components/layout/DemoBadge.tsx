import React from 'react';
import { Info } from 'lucide-react';

interface DemoBadgeProps {
  label?: string;
  tooltip?: string;
  size?: 'sm' | 'md';
}

export const DemoBadge: React.FC<DemoBadgeProps> = ({
  label = 'Demo / Simulated Data',
  tooltip = 'Values and metrics are simulated for demonstration purposes and not verified real-time sensors.',
  size = 'sm'
}) => {
  return (
    <span
      title={tooltip}
      className={`inline-flex items-center gap-1 font-medium rounded-full bg-amber-50 text-amber-700 border border-amber-200/80 cursor-help ${
        size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1'
      }`}
    >
      <Info className="w-3 h-3 text-amber-500 shrink-0" />
      <span>{label}</span>
    </span>
  );
};
