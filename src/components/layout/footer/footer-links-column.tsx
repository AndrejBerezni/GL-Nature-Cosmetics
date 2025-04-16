import Link from 'next/link';

import { IFooterColumn } from '@/lib/types';

export default function FooterLinksColumn({
  column,
}: {
  column: IFooterColumn;
}) {
  return (
    <ul className="flex flex-col gap-1 md:gap-2">
      <h6 className="capitalize font-bold text-base md:text-lg mb-0.5 md:mb-1">
        {column.title}
      </h6>
      {column.links.map((link) => (
        <Link
          key={`${column.title}-${link.href}-link`}
          href={link.href}
          className="text-secondary-text text-nowrap text-sm md:text-base hover:text-accent capitalize animated-underline"
        >
          {link.text}
        </Link>
      ))}
    </ul>
  );
}
