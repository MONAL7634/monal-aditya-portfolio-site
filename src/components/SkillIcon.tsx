
import React from 'react';
import { 
  Code2,
  FileJson,
  Terminal,
  Database,
  Coffee,
  BarChart2,
  FileCode,
  Palette,
  Grid,
  Server,
  Atom,
  Box,
  ChevronsUp,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

const SkillIcon = ({ name, className, size = 28 }: SkillIconProps) => {
  const iconMap: Record<string, LucideIcon> = {
    'C++': Code2,
    'JavaScript': FileJson,
    'C': Terminal,
    'PHP': Code2,
    'Java': Coffee,
    'Python': BarChart2,
    'HTML': FileCode,
    'CSS': Palette,
    'Bootstrap': Grid,
    'Node.js': Server,
    'React': Atom,
    'Laravel': Box,
    'Tailwind': ChevronsUp,
    'MySQL': Database,
    'MongoDB': LayoutGrid,
  };

  const Icon = iconMap[name];

  if (!Icon) {
    return (
      <div className={cn('flex items-center justify-center p-2 rounded-full backdrop-blur-sm bg-white/30', className)}>
        <span className="text-xs font-medium">{name}</span>
      </div>
    );
  }

  return <Icon size={size} className={className} />;
};

export default SkillIcon;
