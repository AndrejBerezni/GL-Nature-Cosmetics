import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

interface ISocialMediaLink {
  id: string;
  href: string;
  img: string;
  name: string;
}

function SocialMediaLink({ link }: { link: ISocialMediaLink }) {
  return (
    <li className="hover:scale-105 duration-150 hover:shadow-md">
      <Link href={link.href}>
        <Image
          src={link.img}
          width={32}
          height={32}
          alt={`${link.name} link`}
        />
      </Link>
    </li>
  );
}

interface ISocialMediaLinksProps {
  align?: 'start' | 'center' | 'end';
}

export default function SocialMediaLinks({ align }: ISocialMediaLinksProps) {
  const links: ISocialMediaLink[] = [
    {
      id: 'facebook-link',
      href: 'https://www.facebook.com/profile.php?id=100075662247637',
      img: '/icons/facebook.png',
      name: 'facebook',
    },
    {
      id: 'instagram-link',
      href: '/',
      img: '/icons/instagram.png',
      name: 'instagram',
    },
    {
      id: 'linkedin-link',
      href: '/',
      img: '/icons/linkedin.png',
      name: 'linkedin',
    },
    {
      id: 'whatsapp-link',
      href: '/',
      img: '/icons/whatsapp.png',
      name: 'whatsapp',
    },
  ];

  return (
    <ul
      className={clsx('flex items-center gap-2', {
        'justify-start': align === 'start' || !align,
        'justify-center': align === 'center',
        'justify-end': align === 'end',
      })}
    >
      {links.map((link) => (
        <SocialMediaLink key={link.id} link={link} />
      ))}
    </ul>
  );
}
