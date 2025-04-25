
import React from 'react';
import { 
  CPlus, 
  Javascript, 
  C, 
  Php,
  Java,
  Python,
  Html,
  Css,
  Bootstrap,
  Node,
  React as ReactIcon,
  Laravel,
  Tailwind,
  Mysql,
  Mongodb
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SkillIconProps {
  name: string;
  className?: string;
  size?: number;
}

const SkillIcon = ({ name, className, size = 28 }: SkillIconProps) => {
  const iconMap: Record<string, React.FC<{ size: number, className?: string }>> = {
    'C++': CPlus,
    'JavaScript': Javascript,
    'C': C,
    'PHP': Php,
    'Java': Java,
    'Python': Python,
    'HTML': Html,
    'CSS': Css,
    'Bootstrap': Bootstrap,
    'Node.js': Node,
    'React': ReactIcon,
    'Laravel': Laravel,
    'Tailwind': Tailwind,
    'MySQL': Mysql,
    'MongoDB': Mongodb,
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
