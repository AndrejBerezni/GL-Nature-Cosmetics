import Image from 'next/image';

import { SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function SideMenuHeader() {
  return (
    <SheetHeader className="pb-0">
      <SheetTitle>
        <Image
          src={'/logo/horizontal-gold.png'}
          width={600}
          height={400}
          alt="GL logo with text"
          className="w-2/3 -ml-2 -mb-3 drop-shadow-xl"
        />
      </SheetTitle>
    </SheetHeader>
  );
}
