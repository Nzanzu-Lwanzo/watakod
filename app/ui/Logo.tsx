"use client";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="logo">
      <img src="/images/logo.svg" alt="" />
    </Link>
  );
};

export default Logo;
