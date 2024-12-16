"use client";

import React, { useRef } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".logo", {
        scale: 0,
        rotate: -360,
        duration: 0.4,
        ease: "back.in",
      });
    },
    { scope: headerRef }
  );

  return (
    <header ref={headerRef}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
