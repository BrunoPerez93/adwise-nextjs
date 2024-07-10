import Link from 'next/link';

const NavLink = ({ href, children, onClick }) => (
  <Link href={href} onClick={onClick} className="dropdown_link">
    {children}
  </Link>
);

export default NavLink;