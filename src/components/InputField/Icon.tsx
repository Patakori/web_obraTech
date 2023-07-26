import { ElementType } from 'react';

import { twMerge } from 'tailwind-merge';

interface IconProps {
  icon: ElementType;
  className?: string;
}
export function Icon({ icon: Icon, className }: IconProps) {
  return (
    <button
      type="button"
      className="flex w-auto h-auto justify-center items-center absolute"
    >
      <Icon className={twMerge('text-xl', className)} />
    </button>
  );
}
