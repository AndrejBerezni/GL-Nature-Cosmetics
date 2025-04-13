'use client';

import { useEffect } from 'react';

import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const translate = useTranslations('error');

  useEffect(
    function handleErrorLog() {
      //TO DO: handle logging the error once we setup that service
    },
    [error]
  );

  return (
    <main>
      <h2>{translate('somethingWentWrong')}</h2>
      <Button onClick={reset}>{translate('tryAgain')}</Button>
    </main>
  );
}
