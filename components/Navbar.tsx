"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="nav-left">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
        </div>

        <div className="logo-holder">
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Finesse by Beni logo" width={118} height={118} priority />
          </Link>
        </div>

        <div className="nav-right">
          <Link href="/studio">Studio</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}