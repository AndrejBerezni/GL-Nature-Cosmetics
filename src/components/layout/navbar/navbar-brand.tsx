'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarBrand() {
  return (
    <Link href="/" className="min-w-1/5 gap-2 flex items-center">
      <Image
        src="/logo/round-initials-green.png"
        alt="GL logo"
        width={50}
        height={50}
        suppressHydrationWarning
      />
      <span className="font-bellefair uppercase text-xl">Nature Cosmetics</span>
    </Link>
  );
}
