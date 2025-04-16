import Footer from './footer';
import InfoBanner from './info-banner';
import Navbar from './navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="w-screen flex flex-col items-center border-b-2 bg-background">
        <InfoBanner />
        <Navbar />
      </header>
      <main className="max-w-[1440px] px-4 flex-1 w-full">{children}</main>
      <Footer />
    </>
  );
}
