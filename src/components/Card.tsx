import React, { ReactNode } from 'react';

interface CardProps{
  children: React.ReactNode;
  maxWidth: string
  maxHeight?: string
  height: string
  flexDirection?: string
  justify: string
  align: string
}

export function Card({
  children, maxWidth, maxHeight, height, flexDirection, justify, align,
}:CardProps) {
  return (
    <div className={`flex w-full h-full shadow-xl bg-primary-150 rounded-[3rem] ${maxWidth} ${maxHeight} ${height} ${flexDirection} ${justify} ${align}`}>
      {
        children
      }
    </div>
  );
}
