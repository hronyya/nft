import Link from 'next/link';
import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="mx-52 my-10 flex justify-between">
      <Logo />
      <NavLinks />
    </header>
  );
}
