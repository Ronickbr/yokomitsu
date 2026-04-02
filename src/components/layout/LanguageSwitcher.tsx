"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "pt-BR", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center bg-zinc-900 border border-white/10 rounded-full p-1 shadow-2xl">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => handleLanguageChange(loc.code)}
          disabled={isPending}
          className={`
            px-3 py-1 rounded-full text-[10px] font-black transition-all duration-300
            ${locale === loc.code
              ? "bg-brand-accent text-white shadow-[0_0_10px_rgba(227,0,15,0.3)]"
              : "text-zinc-500 hover:text-white hover:bg-white/5"}
            ${isPending ? "opacity-50 cursor-wait" : "cursor-pointer"}
          `}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
