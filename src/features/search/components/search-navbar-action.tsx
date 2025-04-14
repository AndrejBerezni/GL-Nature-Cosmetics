import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';

import NavbraActionWrapper from '@/components/layout/navbar/navbar-action-wrapper';

export default function SearchNavbarAction() {
  const translate = useTranslations('search');
  return (
    <NavbraActionWrapper tooltipText={translate('search')}>
      <Search />
    </NavbraActionWrapper>
  );
}
