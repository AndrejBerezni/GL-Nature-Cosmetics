import Image from 'next/image';
import Link from 'next/link';

interface SocialMediaLink {
  id: string;
  href: string;
  img: string;
  name: string;
}

function SocialMediaLink({ link }: { link: SocialMediaLink }) {
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

export default function SocialMediaLinks() {
  const links: SocialMediaLink[] = [
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
    <ul className="flex gap-2">
      {links.map((link) => (
        <SocialMediaLink key={link.id} link={link} />
      ))}
    </ul>
  );
}
