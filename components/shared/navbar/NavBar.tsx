import React from "react";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav className="flex-between background-lght900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow"
        ></Image>
      </Link>
    </nav>
  );
};

export default NavBar;
