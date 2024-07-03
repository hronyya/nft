import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Footer() {
  return (
    <footer className="mx-auto flex flex-col items-center sm:flex-row w-full justify-between border-t-2 border-white/5 py-10">
      <div className='flex flex-col items-center sm:items-start'>
        <Logo />
        <p className="mt-6 w-[427px] hidden sm:block text-backtext text-center sm:text-start">
          For investment inquiries, please reach out to us. For community
          requests, please reach out to us <Link href='/' className='underline'>here</Link>.
        </p>
      </div>
      <div className='flex flex-col items-center'>
        <div className="my-6">
          <NavLinks />
        </div>
        <Link className="text-backtext underline" href="/">
          Terms & Conditions
        </Link>
        <p className="mt-6 w-[427px] block sm:hidden text-backtext text-center sm:text-start">
          For investment inquiries, please reach out to us. For community
          requests, please reach out to us <Link href='/' className='underline'>here</Link>.
        </p>
      </div>
    </footer>
  );
}
