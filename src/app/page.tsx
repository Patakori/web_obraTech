import { Card } from '@/components/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24 bg-login-desktop bg-center bg-no-repeat bg-cover">
      <Card maxWidth="max-w-[86rem]" height="min-h-[41.063rem]" justify="justify-between" align="items-center">
        <div className="relative flex justify-center items-center h-full w-[50%]">
          oi
        </div>

        <Image height={657} width={688} src="/bgCardHome.png" alt="Construção Civil" />

      </Card>
    </main>
  );
}
