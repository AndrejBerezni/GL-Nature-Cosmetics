import NextIntl from './next-intl-provider';
import ThemeProvider from './theme-provider';

interface IProvidersWrapperProps {
  children: React.ReactNode;
  locale: string;
}

export default function ProvidersWrapper({
  children,
  locale,
}: IProvidersWrapperProps) {
  return (
    <NextIntl locale={locale}>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntl>
  );
}
