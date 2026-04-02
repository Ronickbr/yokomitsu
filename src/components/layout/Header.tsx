"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Magnetic from "@/components/ui/Magnetic";

export default function Header() {
  const t = useTranslations("Navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className={`fixed top-0 z-[100] w-full border-b border-white/5 bg-black/80 backdrop-blur-2xl transition-all ${isMobileMenuOpen ? "opacity-0 invisible" : "opacity-100 visible"}`}>
        <div className="container mx-auto flex h-20 items-center justify-between px-6 font-display">
          <div className="flex items-center gap-6">
            <Magnetic strength={0.2}>
              <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="https://yokomitsu.pe/wp-content/uploads/2024/04/logo.png"
                  alt="Yokomitsu"
                  width={180}
                  height={45}
                  className="h-8 md:h-10 w-auto object-contain"
                  priority
                />
              </Link>
            </Magnetic>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {[
              { name: t("home"), href: "/" },
              { name: t("about"), href: "/sobre" },
              { name: t("products"), href: "/produtos" },
              { name: t("contact"), href: "/contato" },
            ].map((item) => (
              <Magnetic key={item.name} strength={0.3}>
                <Link
                  href={item.href}
                  className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors relative group py-2"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-accent transition-all group-hover:w-full" />
                </Link>
              </Magnetic>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:gap-6">
            <LanguageSwitcher />
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Completely isolated */}
      <div
        className={`fixed inset-0 bg-[#060606] z-[9999] transition-all duration-500 ease-in-out md:hidden flex flex-col px-6 py-20 ${isMobileMenuOpen ? "opacity-100 visible translate-x-0" : "opacity-0 invisible translate-x-full"
          }`}
      >
        {/* Mobile Header inside Overlay */}
        <div className="flex items-center justify-between mb-20">
          <Image
            src="https://yokomitsu.pe/wp-content/uploads/2024/04/logo.png"
            alt="Yokomitsu"
            width={150}
            height={38}
            className="h-8 w-auto object-contain"
          />
          <button
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Fechar menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <nav className="flex flex-col gap-8 text-left">
          {[
            { name: t("home"), href: "/" },
            { name: t("about"), href: "/sobre" },
            { name: t("products"), href: "/produtos" },
            { name: t("contact"), href: "/contato" },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-3xl font-black uppercase tracking-tighter text-white hover:text-brand-accent transition-all duration-300 transform ${isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
