import { useTranslations } from 'next-intl';

export default function FooterCopyright() {
  const translate = useTranslations('layout');
  return (
    <section className="col-span-5 flex items-center justify-center tracking-wide text-center">
      <p className="font-medium text-sm">
        Copyright © {new Date().getFullYear()}{' '}
        <span className="text-accent font-semibold">GL Nature Cosmetics</span>.{' '}
        {translate('rightsReserved')}
      </p>
    </section>
  );
}
