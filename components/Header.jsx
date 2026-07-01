"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { assetPath } from "@/lib/paths";
import { business, navItems } from "@/lib/siteData";

function normalizePath(pathname) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const withoutBase =
    basePath && pathname.startsWith(basePath)
      ? pathname.slice(basePath.length) || "/"
      : pathname;
  return withoutBase.replace(/\/$/, "") || "/";
}

export default function Header() {
  const pathname = usePathname() || "/";
  const activePath = normalizePath(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="site-header" id="top">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="I.T LINKS home">
          <img
            className="brand-logo"
            src={assetPath(business.logo)}
            alt="I.T LINKS CCTV Camera and Network Solutions logo"
            width="58"
            height="58"
          />
          <span>
            <strong>{business.shortName}</strong>
            <small>{business.tagline}</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="nav-panel">
          <ul className="nav-links">
            {navItems.map((item) => {
              const itemPath = item.href.replace(/\/$/, "") || "/";
              const isActive = activePath === itemPath;
              return (
                <li key={item.href}>
                  <Link
                    className={isActive ? "active" : undefined}
                    aria-current={isActive ? "page" : undefined}
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link className="btn btn-primary nav-cta" href="/contact">
            Contact Now
          </Link>
        </div>
      </nav>
    </header>
  );
}
