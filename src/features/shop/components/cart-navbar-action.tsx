import { ShoppingBasket } from 'lucide-react';
import { useTranslations } from 'next-intl';

import NavbraActionWrapper from '@/components/layout/navbar/navbar-action-wrapper';

export default function CartNavbarAction() {
  const translate = useTranslations('shop');
  return (
    <NavbraActionWrapper tooltipText={translate('cart')}>
      <ShoppingBasket />
    </NavbraActionWrapper>
  );
}
