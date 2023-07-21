import { twMerge } from 'tailwind-merge';

interface TextProps {
  text: string;
  className?: string;
}
export function Text({ text, className }: TextProps) {
  return <p className={twMerge('font-inter font-bold', className)}>{text}</p>;
}
