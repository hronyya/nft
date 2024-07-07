import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full shrink-0 flex-col items-center justify-between border-t-2 border-white/5 py-10 sm:w-[80%] sm:flex-row">
      <div className="flex flex-col items-center sm:items-start">
        <Logo />
        <p className="mt-6 hidden w-[427px] text-center text-backtext sm:block sm:text-start">
          For investment inquiries, please reach out to us. For community
          requests, please reach out to us 
          <Link href="/" className="underline">
            here
          </Link>
          .
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="my-6">
          <NavLinks />
        </div>
        <Link className="text-backtext underline" href="/">
          Terms & Conditions
        </Link>
        <p className="mt-6 block w-[427px] text-center text-backtext sm:hidden sm:text-start">
          For investment inquiries, please reach out to us. For community
          requests, please reach out to us 
          <Link href="/" className="underline">
            here
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
