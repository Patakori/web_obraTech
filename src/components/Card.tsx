import React, { ReactNode } from 'react';

interface CardProps {
  children: React.ReactNode;
  styled: string;
}

export function Card({ children, styled }: CardProps) {
  return (
    <div className={`flex h-full w-full rounded-[3rem] bg-primary-150 shadow-xl ${styled}`}>
      {children}
    </div>
  );
}
