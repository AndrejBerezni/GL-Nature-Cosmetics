import { useTranslations } from 'next-intl';

import { IFooterColumn } from '@/lib/types';

import FooterLinksColumn from './footer-links-column';

export default function FooterLinksSection() {
  const translate = useTranslations('layout');
  const columns: IFooterColumn[] = [
    {
      title: translate('company'),
      links: [
        { href: '/about-us', text: translate('about') },
        { href: '/blog', text: translate('blog') },
        { href: '/contact', text: translate('contactUs') },
      ],
    },
    {
      title: translate('customerServices'),
      links: [
        { href: '/account', text: translate('account') },
        { href: '/track-order', text: translate('trackOrder') },
        { href: '/faq', text: translate('faq') },
      ],
    },
    {
      title: translate('ourInformation'),
      links: [
        { href: '/privacy', text: translate('privacy') },
        { href: '/terms', text: translate('terms') },
      ],
    },
  ];
  return (
    <section className="col-span-3 lg:grid lg:grid-cols-3 flex-wrap flex gap-12 lg:gap-4 justify-between">
      {columns.map((column) => (
        <FooterLinksColumn
          key={`${column.title}-footer-column`}
          column={column}
        />
      ))}
    </section>
  );
}
