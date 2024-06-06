import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
       <Image
        src="/loglog-removebg-preview.png"
        alt="Logo"
        width={60}  // Set the width you desire
        height={65} // Set the height you desire
        style={{ filter: 'invert(1)' }}
      />
      
      
      <p className="text-[44px]">AHJIN</p>
    </div>
  );
}
