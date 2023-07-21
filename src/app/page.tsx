'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/Button';
import ButtonDefault from '@/components/ButtonDefault';
import { Card } from '@/components/Card';
import { InputField } from '@/components/InputField';
import { InputData } from '@/components/InputField/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { MoveDownLeft } from 'lucide-react';
import { z } from 'zod';

const StepProjectSchema = z.object({
  email: z.string().email({ message: 'e-mail inválido' }),
  password: z
    .string()
    .min(8, { message: 'deve conter no minimo 8 caracteres' })
    .refine(
      (value) => {
        const number = /.*\d.*/.test(value);

        return number;
      },
      { message: 'deve conter ao menos um dígito (0-9)' }
    )
    .refine(
      (value) => {
        const number = /.*[a-z].*/.test(value);

        return number;
      },
      { message: 'deve conter ao menos uma letra minúscula' }
    )
    .refine(
      (value) => {
        const number = /.*[A-Z].*/.test(value);

        return number;
      },
      { message: 'deve conter ao menos uma letra maiúscula' }
    )
    .refine(
      (value) => {
        const number = /.*[$*&@#].*/.test(value);

        return number;
      },
      { message: 'deve conter ao menos um caractere especial ($,*,&,@,#)' }
    )
});

export type SchemaStepProject = z.infer<typeof StepProjectSchema>;

export default function Home() {
  const { register, handleSubmit, formState, control, getValues, trigger, watch } =
    useForm<SchemaStepProject>({
      resolver: zodResolver(StepProjectSchema),
      mode: 'onSubmit'
    });

  const { errors } = formState;

  const onSubmit = (data: any) => {
    console.log('onSubmit', data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black/50 bg-login-desktop bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <Card styled="max-w-[86rem] h-[41.063rem] justify-between items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex h-full w-[50%] flex-col items-center justify-center"
        >
          <Image
            height={109}
            width={176}
            src="/logo.svg"
            alt="Construção Civil"
          />
          <h1 className=" font-inter text-2xl font-normal text-quaternary-50">Bem vindo!</h1>

          <InputField.Root className="max-w-[20.3125rem]">
            {/* <InputField.Label text="E-mail" /> */}
            <InputField.InputData
              type="text"
              placeholder="Digite aqui"
              register={register('email')}
              className="rounded-t-lg"
            />
          </InputField.Root>
          <InputField.Root className="max-w-[20.3125rem]">
            {/* <InputField.Label text="Senha" /> */}
            <InputField.InputData
              type="text"
              placeholder="Digite aqui"
              register={register('password')}
              className=" mt-[-2px] rounded-b-lg"
            />
            <InputField.Error text={errors.email?.message || errors.password?.message} />
          </InputField.Root>

          <Button.Root
            type="submit"
            className="max-w-[20.3125rem] bg-secondary-150"
          >
            <Button.Text
              className="text-base text-black"
              text="Login"
            />
          </Button.Root>
          <Button.Root className="max-w-[8.75rem] bg-white border-2 border-secondary-150">
            <Button.Text
              className=" text-sm text-quaternary-50"
              text="Cadastrar-se"
            />
          </Button.Root>
        </form>

        <Image
          height={657}
          width={688}
          src="/bgCardHome.png"
          alt="Construção Civil"
        />
      </Card>
    </main>
  );
}
