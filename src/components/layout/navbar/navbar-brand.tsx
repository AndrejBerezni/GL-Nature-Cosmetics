'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarBrand() {
  return (
    <Link href="/" className="min-w-1/5 gap-2 flex items-center">
      <Image
        src="/logo/round-initials-green.png"
        alt="GL logo"
        width={54}
        height={40}
        className="sm:w-[54px] sm:h-[40px] w-[46px] h-[35px]"
      />
      <span className="font-bellefair uppercase text-base sm:text-xl">
        Nature Cosmetics
      </span>
    </Link>
  );
}
