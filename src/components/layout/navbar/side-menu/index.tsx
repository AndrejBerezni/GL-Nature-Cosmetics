import { Menu } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import SideMenuBrand from './side-menu-brand';
import SideMenuHeader from './side-menu-header';
import SideMenuLinks from './side-menu-links';

export default function BurgerMenu() {
  return (
    <Sheet>
      <SheetTrigger className="hover:cursor-pointer rounded-md hover:scale-y-125 hover:text-primary duration-200">
        <Menu />
      </SheetTrigger>
      <SheetContent>
        <SideMenuHeader />
        <SideMenuLinks />
        <SideMenuBrand />
      </SheetContent>
    </Sheet>
  );
}
