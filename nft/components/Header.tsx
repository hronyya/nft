import Logo from './Logo';
import NavLinks from './NavLinks';

export default function Header() {
  return (
    <header className="my-10 flex justify-between px-10">
      <Logo />
      <NavLinks />
    </header>
  );
}
