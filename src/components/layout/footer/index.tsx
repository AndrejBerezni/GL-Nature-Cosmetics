import { Separator } from '@/components/ui/separator';

import FooterBrand from './footer-brand';
import FooterCopyright from './footer-copyright';
import FooterLinksSection from './footer-links-section';

export default function Footer() {
  return (
    <footer className="w-screen flex justify-center bg-muted lg:p-4 border-t-[1px] lg:border-t-0">
      <nav className="max-w-[1440px] lg:rounded-sm flex flex-col p-4 w-full bg-background md:grid md:grid-cols-5 gap-4">
        <FooterBrand />
        <Separator className="md:hidden" />
        <FooterLinksSection />
        <Separator className="col-span-5" />
        <FooterCopyright />
      </nav>
    </footer>
  );
}
