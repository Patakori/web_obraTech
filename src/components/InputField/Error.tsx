import { twMerge } from 'tailwind-merge';

interface ErrorProps {
  text: string | undefined;
  className?: string;
}
export function Error({ text, className }: ErrorProps) {
  return (
    <p
      className={twMerge(
        ' pt-1 self-end font-bold text-[.625rem] font-inter text-erro-150',
        className
      )}
    >
      {text}
    </p>
  );
}
