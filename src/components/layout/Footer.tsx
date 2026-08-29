import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Mail, ArrowUpRight } from "lucide-react";

import { getSettings } from "@/lib/settings";

import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const tNav = await getTranslations("Navigation");
  const tFooter = await getTranslations("Footer");
  const settings = await getSettings();

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="footer-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">

          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-6 mb-4 group">
              <Image
                src="/logo.webp"
                alt="Yokomitsu"
                width={200}
                height={50}
                className="h-12 w-auto object-contain"
              />
              <div className="relative w-14 h-14 grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                <Image src="/mascote.png" alt="Mascote" fill className="object-contain" />
              </div>
            </Link>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10">
              {tFooter("description")}
            </p>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-10">
              {tFooter("quickLinks")}
            </h3>
            <ul className="space-y-6">
              {[
                { name: tNav("home"), href: "/" },
                { name: tNav("about"), href: "/sobre" },
                { name: tNav("products"), href: "/produtos" },
                { name: tNav("contact"), href: "/contato" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center justify-between text-xl font-medium text-gray-400 hover:text-white transition-colors">
                    {link.name}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-10">
              {tFooter("contact")}
            </h3>
            <div className="space-y-8">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">E-mail</p>
                  <a href={`mailto:${settings.contact_email}`} className="text-xl text-white hover:text-brand-accent transition-colors">{settings.contact_email}</a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Telefone</p>
                  <p className="text-xl text-white">{settings.contact_phone}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">Endereço</p>
                  <p className="text-zinc-400 text-sm">{settings.contact_address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs font-medium">
            &copy; {new Date().getFullYear()} {tFooter("rights")}
          </p>
          <div className="flex gap-8">
            <span className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Precison Engineered</span>
            <span className="text-zinc-700 text-[10px] font-black uppercase tracking-[0.4em]">Global Quality</span>
          </div>
        </div>
      </div>

      {/* Giant Outline Logo Watermark */}
      <div className="absolute bottom-30 right-0 md:right-90 translate-x-1/3 md:translate-x-1/4 translate-y-1/2 pointer-events-none opacity-[0.02] hidden sm:block">
        <span className="text-[10rem] md:text-[15rem] font-black text-white leading-none text-nowrap">YOKOMITSU</span>
      </div>
    </footer>
  );
}
