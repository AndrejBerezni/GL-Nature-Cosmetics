import { NavigationMenuList } from '@/components/ui/navigation-menu';
import SearchNavbarAction from '@/features/search/components/search-navbar-action';
import CartNavbarAction from '@/features/shop/components/cart-navbar-action';
import UserNavbarAction from '@/features/user/components/user-navbar-action';

import LanguageSelect from './ language-select';

export default function NavbarActions() {
  return (
    <NavigationMenuList className="hidden lg:flex gap-4 justify-end">
      <SearchNavbarAction />
      <CartNavbarAction />
      <UserNavbarAction />
      <LanguageSelect />
    </NavigationMenuList>
  );
}
