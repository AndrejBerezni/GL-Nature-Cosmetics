import Image from 'next/image';

import { SheetFooter } from '@/components/ui/sheet';

export default function SideMenuBrand() {
  return (
    <SheetFooter className="flex items-center justify-center w-full">
      <Image
        src={'/logo/round-gold.png'}
        width={150}
        height={150}
        alt="Brand logo with text"
        className="w-2/3 drop-shadow-md"
      />
    </SheetFooter>
  );
}
