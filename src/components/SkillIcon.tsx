
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
      <div className={cn('flex items-center justify-center p-2 rounded-full backdrop-blur-sm bg-white/30 hover:bg-white/50 transition-all duration-300 hover:scale-110 hover:rotate-3 group', className)}>
        <span className="text-xs font-medium group-hover:text-portfolio-primary">{name}</span>
      </div>
    );
  }

  return (
    <div className="group">
      <Icon 
        size={size} 
        className={cn(
          className,
          "transition-all duration-300 hover:scale-125 hover:rotate-6 group-hover:text-portfolio-primary"
        )} 
      />
    </div>
  );
};

export default SkillIcon;
