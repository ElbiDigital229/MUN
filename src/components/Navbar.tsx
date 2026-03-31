"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface DropdownItem {
  label: string;
  href: string;
  badge?: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  {
    label: "About us",
    href: "/about",
    dropdown: [
      { label: "Who We Are", href: "/about/who-we-are" },
      { label: "Our Mission", href: "/about/our-mission" },
      { label: "Our Governance", href: "/about/our-governance" },
      { label: "The Club", href: "/about/the-club" },
    ],
  },
  {
    label: "Our Conferences",
    href: "/program",
    dropdown: [
      { label: "CWMUN Rome", href: "/program/rome" },
      { label: "CWMUN New York", href: "/program/nyc" },
      { label: "CWMUN Paris", href: "/program/paris" },
      { label: "CWMUN Singapore", href: "/program/singapore" },
      { label: "CWMUN Emirates", href: "/program/emirates" },
    ],
  },
  { label: "MIA+", href: "/cwa-plus" },
  { label: "FAQ", href: "/faq" },
  { label: "World Changer | Join Us", href: "/join" },
  { label: "Volunteering", href: "/volunteering" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="w-full sticky top-0 z-50">


      {/* Main nav */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 mr-8">
            <Image
              src="/logo-mia.png"
              alt="MUN International Academy"
              width={240}
              height={108}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav items */}
          <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown ? handleMouseEnter(item.label) : undefined
                }
                onMouseLeave={item.dropdown ? handleMouseLeave : undefined}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-1.5 text-[13px] font-normal text-gray-600 hover:text-primary hover:bg-primary/10 hover:rounded-full transition-all flex items-center gap-1 whitespace-nowrap rounded-full ${
                    openDropdown === item.label
                      ? "bg-primary/10 text-primary"
                      : ""
                  }`}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg
                      className={`w-3 h-3 transition-transform ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Desktop dropdown */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-white shadow-lg py-2 min-w-[220px] border-t-2 border-primary/20">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-5 py-2.5 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors"
                      >
                        {sub.label}
                        {sub.badge && (
                          <span className="ml-2 inline-block text-green-600 text-xs font-medium">
                            {sub.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Contact us link */}
          <Link
            href="/contact"
            className="hidden lg:block text-primary text-[13px] font-medium underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors whitespace-nowrap"
          >
            Contact us
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden ml-auto p-2 text-gray-700 hover:text-primary"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="w-full flex items-center justify-between px-3 py-2.5 text-[13px] font-normal text-gray-600 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                      >
                        {item.label}
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            mobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {mobileDropdown === item.label && (
                        <div className="pl-4 space-y-1">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-3 py-2 text-[13px] font-normal text-gray-600 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.label}
                              {sub.badge && (
                                <span className="ml-2 inline-block text-green-600 text-xs font-medium">
                                  {sub.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-[13px] font-normal text-gray-600 hover:text-primary hover:bg-primary/10 rounded-full transition-all"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-3 border-t border-gray-100">
                <Link
                  href="/contact"
                  className="block px-3 py-3 text-sm font-medium text-primary underline underline-offset-4"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
