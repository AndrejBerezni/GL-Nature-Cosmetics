import Image from 'next/image';

import SocialMediaLinks from '@/components/social-media-links';

export default function FooterBrand() {
  return (
    <section className="col-span-2 mr-4 flex items-center lg:items-start flex-col gap-2">
      <div className="flex flex-col md:flex-row gap-2 items-center md:mb-4">
        <Image
          src="/logo/round-gold.png"
          width={150}
          height={150}
          alt="Brand logo"
          className="-ml-4"
        />
        <p className="font-medium text-accent italic md:text-start text-center">
          TO DO: Here we need to insert some text describing the brand. Not more
          than 2 sentences
        </p>
      </div>
      <SocialMediaLinks />
    </section>
  );
}
