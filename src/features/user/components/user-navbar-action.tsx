import { UserRound } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import NavbraActionWrapper from '@/components/layout/navbar/navbar-action-wrapper';

export default function UserNavbarAction() {
  const translate = useTranslations('user');
  // TO DO: handle auth modal popping up if unauthenticated
  return (
    <NavbraActionWrapper tooltipText={translate('account')}>
      <Link href="/">
        <UserRound />
      </Link>
    </NavbraActionWrapper>
  );
}
