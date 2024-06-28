import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-[1320px] justify-between border-t-2 border-white/5 py-10">
      <div>
        <Logo />
        <p className="mt-6 w-[427px] text-backtext">
          For investment inquiries, please reach out to us. For community
          requests, please reach out to us here.
        </p>
      </div>
      <div>
        <div className="my-6">
          <NavLinks />
        </div>
        <Link className="text-backtext underline" href="/">
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
}
