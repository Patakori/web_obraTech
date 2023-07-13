import { ReactNode } from 'react';

interface PropsButtonDefault {
  classNameButton: string;
  children: ReactNode;
}

export default function ButtonDefault({ classNameButton, children }: PropsButtonDefault) {
  return (
    <button
      type="button"
      className={`my-4 flex rounded-full border px-4 py-2 active:transform active:border-[1px] active:bg-white active:transition-colors active:duration-[50ms] data-[loading=true]:bg-black
        ${classNameButton}
      `}
    >
      {children}
    </button>
  );
}
