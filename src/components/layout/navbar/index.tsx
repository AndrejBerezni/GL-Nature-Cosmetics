import { NavigationMenu } from '@/components/ui/navigation-menu';
import { SearchMobile } from '@/features/search/components/search-mobile';
import CartNavbarAction from '@/features/shop/components/cart-navbar-action';

import NavbarActions from './navbar-actions';
import NavbarBrand from './navbar-brand';
import NavbarLinks from './navbar-links';
import SideMenu from './side-menu';

export default function Navbar() {
  return (
    <NavigationMenu
      className="lg:flex grid grid-cols-3 items-center justify-between w-full
     max-w-[1440px] px-4 py-2 gap-2 bg-background"
    >
      <NavbarBrand />
      <NavbarLinks />
      <div className="min-w-1/5 hidden lg:inline-block">
        <NavbarActions />
      </div>
      <div className="justify-self-end flex gap-4 items-center lg:hidden">
        <CartNavbarAction />
        <SideMenu />
      </div>
      <SearchMobile />
    </NavigationMenu>
  );
}
