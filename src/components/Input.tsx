import { useState } from 'react';

interface PropsInput {
  typeForm: string;
  styledInput?: string;
  name?: string;
  styledComponent: string;
  placeholder: string;
  onChange?: any;
  styledTitle?: string;
  styledBorder?: string;
  error?: string;
  register?: any;
}

export function Input({
  typeForm,
  styledInput,
  name,
  styledComponent,
  placeholder,
  styledTitle,
  styledBorder,
  error,
  register,
  onChange
}: PropsInput) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <span className={`flex w-full flex-col ${styledComponent}`}>
      <p
        className={` font-montserrat mb-[.5rem] text-sm font-normal text-[#0c0041] ${styledTitle}`}
      >
        {name}
      </p>
      <div
        className={`desk:mt-[0.625rem] mt-[0.625rem] flex h-auto w-full items-center justify-end 
        rounded-[0.5rem] md:mt-0 ${styledBorder}`}
      >
        <input
          type={showPassword ? 'text' : typeForm}
          placeholder={placeholder}
          onChange={() => onChange()}
          className={`desk:rounded-[.625rem] text-visiu-blue-150 placeholder:text-visiu-gray-100 flex h-[2.5rem] w-full max-w-[25rem] rounded-[.625rem] border-[1px] border-[#C6C6C6]
            px-2 text-sm placeholder:text-sm placeholder:font-normal focus:outline-none md:rounded-[.4rem] ${styledInput}`}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...register}
        />
      </div>
      <p
        className={`font-montserrat mt-1 h-[1rem] self-end text-xs font-medium text-red-500 ${
          error ? 'flex' : 'invisible'
        }`}
      >
        {error}
      </p>
    </span>
  );
}
