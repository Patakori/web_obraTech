import { twMerge } from 'tailwind-merge';

interface LabelProps {
  text: string;
  className?: string;
}
export function Label({ text, className }: LabelProps) {
  return <p className={twMerge('', className)}>{text}</p>;
}
