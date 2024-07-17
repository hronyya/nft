import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="mx-auto my-10 flex w-full max-w-[1920px] justify-between px-0 sm:px-10">
      <Logo />
      <NavLinks />
    </header>
  );
}
