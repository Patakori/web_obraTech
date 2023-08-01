'use client';

import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

interface RootProps {
  className?: string;
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export default function Root({ className, children, type, onClick }: RootProps) {
  return (
    <button
      type={type}
      className={twMerge(
        'active:duration-[50ms] flex w-full items-center justify-center rounded-full border px-4 py-2 active:transform active:brightness-90 ',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
