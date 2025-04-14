'use client';
import { Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/navigation';

import NavbraActionWrapper from './navbar-action-wrapper';

interface ILanguage {
  locale: 'pt' | 'en';
  name: string;
}

function LanguageItem({ language }: { language: ILanguage }) {
  const pathname = usePathname();
  const router = useRouter();

  function handleLocaleChange(): void {
    router.push(pathname, { locale: language.locale });
  }

  return (
    <DropdownMenuItem
      className="capitalize font-semibold hover:cursor-pointer"
      onClick={handleLocaleChange}
    >
      {language.name}
    </DropdownMenuItem>
  );
}

export default function LanguageSelect() {
  const translate = useTranslations('navbar');

  const languages: ILanguage[] = [
    { locale: 'pt', name: translate('portuguese') },
    { locale: 'en', name: translate('english') },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <NavbraActionWrapper tooltipText={translate('language')} triggerAsChild>
          <Globe className="hover:cursor-pointer" />
        </NavbraActionWrapper>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <LanguageItem
            key={`${language.locale}-lang-selector-item`}
            language={language}
          />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
