
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
  BoxIcon,
  ChevronsUp,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

const SkillIcon = ({ name, className, size = 28 }: SkillIconProps) => {
  // Map skill names to appropriate Lucide icons
  const iconMap: Record<string, React.FC<{ size: number, className?: string }>> = {
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
    'Laravel': BoxIcon,
    'Tailwind': ChevronsUp,
    'MySQL': Database,
    'MongoDB': LayoutGrid,
  };

  const Icon = iconMap[name];

  if (!Icon) {
    return (
      <div className={cn('flex items-center justify-center p-2 rounded-full', className)}>
        <span className="text-xs font-medium">{name}</span>
      </div>
    );
  }

  return <Icon size={size} className={className} />;
};

export default SkillIcon;
