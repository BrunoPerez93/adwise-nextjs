"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import NavLink from "./NavLink";
import Dropdown from "./Dropdown";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/areaEspecialidad", label: "Área De Especialidad" },
    { href: "/perfiles", label: "Perfiles" },
    { href: "/adwiseUniversity", label: "Adwise University" },
    { href: "/contacto", label: "Contacto" }
  ];

  return (
    <nav className="flex justify-between items-center w-full mb-5 pt-3 app">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/Images/LogoAdwiseNav.png"
          alt="logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/Images/burgerMenu.png"
            width={37}
            height={37}
            alt="profile"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          <Dropdown isOpen={toggleDropdown} onClose={() => setToggleDropdown(false)} />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
