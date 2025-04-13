import { useTranslations } from 'next-intl';

import SocialMediaLinks from '../social-media-links';

//TO DO: This component should be customizable by CMS
export default function InfoBanner() {
  const translate = useTranslations('layout');
  return (
    <aside className="bg-primary w-screen py-2 text-background flex justify-center">
      <div className="w-full flex-wrap max-w-[1440px] px-4 gap-4 flex flex-col xl:flex-row items-center justify-center">
        <p className="capitalize text-sm xl:min-w-1/5 font-semibold text-center">
          {translate('contactUs')}:{' '}
          <span className="text-accent hover:underline hover:cursor-pointer">
            +351 96 123 45 67
          </span>
        </p>
        <p className="whitespace-pre-wrap mx-auto text-center text-sm">
          {translate.rich('underConstruction')}
        </p>
        <div className="xl:min-w-1/5">
          <SocialMediaLinks />
        </div>
      </div>
    </aside>
  );
}
