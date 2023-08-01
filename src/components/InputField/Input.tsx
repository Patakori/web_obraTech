'use client';

import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import { Button } from '../Button';

import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

interface LabelProps {
  className?: string;
  placeholder: string;
  type: string;
  register: UseFormRegisterReturn;
  id: string;
}
export function InputData({ type, placeholder, className, register, id }: LabelProps) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={twMerge(
        'border-2 border-secondary-150 h-auto pt-6 pb-2 w-full font-inter font-bold text-xs px-3 focus:outline-none focus:z-10 focus:border-tertiary-50 peer',
        className
      )}
      {...register}
    />
  );
}
