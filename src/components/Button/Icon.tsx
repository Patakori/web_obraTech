import { ElementType } from 'react';
import { twMerge } from 'tailwind-merge';

interface IconProps {
  icon: ElementType;
  className?: string;
}
export function Icon({ icon: Icon, className }: IconProps) {
  return <Icon className={twMerge('text-xl', className)} />;
}
