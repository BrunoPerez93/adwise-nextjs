import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed-icon wsp-icon">
        <Link href="https://wa.me/50763062254" target="_blank">
          <Image
            src="/assets/Images/whatsapp.png"
            width={60}
            height={60}
            target="_blank"
            alt="logo whatsapp"
          />
        </Link>
      </div>
      <footer className="py-10 mt-auto bg-gray-100">
        <p className="text-center text-blue-950 ">
          © 2024 Adwise Corporate Advisory
        </p>
      </footer>
    </>
  );
};

export default Footer;
