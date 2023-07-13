'use client';

import { Button } from '@/components/Button';
import ButtonDefault from '@/components/ButtonDefault';
import { Card } from '@/components/Card';
import { MoveDownLeft } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black/50 bg-login-desktop bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <Card styled="max-w-[86rem] h-[41.063rem] justify-between items-center">
        <div className="relative flex h-full w-[50%] flex-col items-center justify-center">
          <Image
            height={109}
            width={176}
            src="/logo.svg"
            alt="Construção Civil"
          />
          <h1 className=" font-inter text-2xl font-normal text-quaternary-50">Bem vindo!</h1>

          <Button.Root>
            <Button.Icon icon={MoveDownLeft} />
            <Button.Text text="Clique aqui" />
          </Button.Root>
        </div>

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
