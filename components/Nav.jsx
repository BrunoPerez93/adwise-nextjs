"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
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
          <Link href="/" className="dropdown_link">
            Inicio
          </Link>
          <Link href="/" className="dropdown_link">
            Nosotros
          </Link>
          <Link href="/" className="dropdown_link">
            Área De Especialidad
          </Link>
          <Link href="/" className="dropdown_link">
            Perfiles
          </Link>
          <Link href="/" className="dropdown_link">
            Adwise University
          </Link>
          <Link href="/" className="dropdown_link">
            Contacto
          </Link>
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
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Inicio
              </Link>
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Nosotros
              </Link>
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Área De Especialidad
              </Link>
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Perfiles
              </Link>
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Adwise University
              </Link>
              <Link
                href="/"
                onClick={() => setToggleDropdown(false)}
                className="dropdown_link"
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
