"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X, Settings, Gauge, Wrench } from "lucide-react";
import { useState, useEffect } from "react";
import Magnetic from "@/components/ui/Magnetic";

export default function Header() {
  const t = useTranslations("Navigation");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-[100] w-full transition-all duration-700 ${
          scrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-brand-accent/5"
            : "bg-transparent"
        }`}
      >
        {/* Animated Decorative Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-60" />

        <div className="container mx-auto flex h-20 md:h-24 items-center justify-between px-4 md:px-6 font-display">
          {/* Left - Logo with Animated Gear */}
          <div className="flex items-center gap-4">
            <div className="relative">
              {/* Animated Gear Icon */}
              <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 opacity-80 hidden md:block">
                <Settings className="w-full h-full text-brand-accent animate-spin-slow" />
              </div>
              <Magnetic strength={0.2}>
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <Image
                    src="https://yokomitsu.pe/wp-content/uploads/2024/04/logo.png"
                    alt="Yokomitsu"
                    width={180}
                    height={45}
                    className="h-10 md:h-12 w-auto object-contain drop-shadow-lg"
                    priority
                  />
                </Link>
              </Magnetic>
            </div>

            {/* Decorative Vertical Line */}
            <div className="hidden lg:block w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent ml-4" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-6">
            {[
              { name: t("home"), href: "/" },
              { name: t("about"), href: "/sobre" },
              { name: t("products"), href: "/produtos" },
              { name: t("contact"), href: "/contato" },
            ].map((item, index) => (
              <Magnetic key={item.name} strength={0.3}>
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-gray-300 hover:text-white transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {index === 0 && <Gauge className="w-3 h-3 opacity-50" />}
                    {item.name}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-accent transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              </Magnetic>
            ))}
          </nav>

          {/* Right Side - Language & Mobile Menu */}
          <div className="flex items-center gap-3 md:gap-6">
            {/* Search Button */}
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/5 hover:bg-brand-accent/20 border border-white/10 hover:border-brand-accent/50 transition-all duration-300 group"
              aria-label="Buscar"
            >
              <svg
                className="w-4 h-4 text-gray-400 group-hover:text-brand-accent transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative flex items-center justify-center w-10 h-10 text-white hover:text-brand-accent transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute left-0 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "top-2 rotate-45" : "top-0"} w-full`} />
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"} w-full`} />
                <span className={`absolute left-0 h-[2px] bg-current transition-all duration-300 ${isMobileMenuOpen ? "bottom-2 -rotate-45" : "bottom-0"} w-full`} />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Accent Line with Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-black z-[9999] transition-all duration-500 ease-in-out md:hidden flex flex-col ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-40 h-40 border border-brand-accent rounded-full animate-pulse" />
          <div className="absolute bottom-40 right-10 w-60 h-60 border border-brand-accent rounded-full animate-pulse delay-700" />
        </div>

        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
          <Image
            src="https://yokomitsu.pe/wp-content/uploads/2024/04/logo.png"
            alt="Yokomitsu"
            width={150}
            height={38}
            className="h-10 w-auto object-contain"
          />
          <button
            className="text-white p-2 hover:text-brand-accent transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Fechar menu"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-0 px-6 py-12">
          {[
            { name: t("home"), href: "/", icon: Gauge },
            { name: t("about"), href: "/sobre", icon: Wrench },
            { name: t("products"), href: "/produtos", icon: Settings },
            { name: t("contact"), href: "/contato", icon: Wrench },
          ].map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`flex items-center gap-4 py-6 border-b border-white/5 text-2xl font-black uppercase tracking-tight text-white hover:text-brand-accent transition-all duration-300 transform ${
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <item.icon className="w-6 h-6 text-brand-accent/60" />
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Footer Info */}
        <div className="mt-auto px-6 pb-12">
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-black text-brand-accent">22+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Países</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-brand-accent">40+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Anos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-brand-accent">10K+</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">Produtos</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
