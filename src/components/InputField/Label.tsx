import { twMerge } from 'tailwind-merge';

interface LabelProps {
  text: string;
  className?: string;
  htmlFor: string;
}
export function Label({ text, className, htmlFor }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={twMerge(
        `z-20 duration-300 transform absolute font-inter font-bold text-sm text-primary-50 translate-x-[.4rem] peer-focus:scale-75 peer-focus:translate-y-[-.4rem] peer-focus:translate-x-[.4rem]
        scale-75 translate-y-[-.4rem] top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[.4rem] peer-placeholder-shown:translate-x-[.8rem]`,
        className
      )}
    >
      {text}
    </label>
  );
}
