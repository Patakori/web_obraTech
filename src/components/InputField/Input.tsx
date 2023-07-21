import { UseFormRegisterReturn } from 'react-hook-form';

import { twMerge } from 'tailwind-merge';

interface LabelProps {
  className?: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
}
export function InputData({ type, placeholder, className, register }: LabelProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={twMerge(
        'border-2 border-secondary-150 h-11 w-full font-inter font-bold text-xs px-3 focus:outline-none focus:z-10 focus:border-quaternary-50',
        className
      )}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...register}
    />
  );
}
