import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface PropsButton {
  className?: string;
  children: ReactNode;
}

export default function Root({ className, children }: PropsButton) {
  return (
    <button
      type="button"
      className={twMerge(
        'active:duration-[50ms], my-4 flex w-full items-center justify-center rounded-full border px-4 py-2 active:transform active:brightness-90 ',
        className
      )}
    >
      {children}
    </button>
  );
}
