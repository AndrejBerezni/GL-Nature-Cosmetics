import Link from 'next/link';

import { INavigationLinkWithIcon } from '@/lib/types';

export default function SideMenuLinksItem({
  link,
}: {
  link: INavigationLinkWithIcon;
}) {
  return (
    <li>
      <Link
        href={link.href}
        className="uppercase text-lg flex gap-4 items-center hover:text-accent tracking-widest"
      >
        <span className="text-accent">{link.icon}</span>
        {link.text}
      </Link>
    </li>
  );
}
