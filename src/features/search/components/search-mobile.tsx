'use client';
import { useState } from 'react';

import clsx from 'clsx';
import { Search, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function SearchMobile() {
  const translate = useTranslations('search');
  const [input, setInput] = useState<string>('');

  const clearInput = () => setInput('');

  return (
    <div className="col-span-3 lg:hidden relative h-fit">
      <Label htmlFor="search-mobile" className="sr-only">
        Search
      </Label>
      <Input
        id="picture"
        type="text"
        className="peer placeholder:pl-6 placeholder:capitalize pr-11 focus:placeholder:p-0 placeholder:duration-150"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={translate('search')}
      />
      <Search
        className={clsx(
          'absolute left-2 top-1/6 peer-focus:hidden text-primary dark:text-accent',
          {
            hidden: input,
          }
        )}
      />
      <Button
        onClick={clearInput}
        variant="ghost"
        className={clsx(
          'absolute peer-focus:border-l-ring right-0 top-0 text-destructive dark:hover:bg-destructive hover:bg-destructive hover:border-destructive hover:text-background rounded-l-none border-[1px]',
          {
            hidden: !input,
          }
        )}
      >
        <X />
      </Button>
    </div>
  );
}
