"use client";

import { useTranslations } from "next-intl";
import { Search, Filter } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState } from "react";

export function SearchForm({
  initialQ = "",
  initialCategory = "",
  categories = []
}: {
  initialQ?: string;
  initialCategory?: string;
  categories: { id: string; name: string }[];
}) {
  const t = useTranslations("ProductsPage");
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState(initialQ);
  const [category, setCategory] = useState(initialCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);

    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ''}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2 bg-black/40 p-2 rounded-xl">
      <div className="flex-1 relative group">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
        <input
          type="text"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full pl-16 pr-6 py-5 bg-zinc-900 border border-white/5 rounded-xl text-white outline-none focus:border-brand-accent/50 transition-all font-medium placeholder:text-zinc-700"
        />
      </div>

      <div className="md:w-72 relative group">
        <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full pl-16 pr-6 py-5 bg-zinc-900 border border-white/5 rounded-xl text-white outline-none focus:border-brand-accent/50 transition-all font-medium appearance-none cursor-pointer"
        >
          <option value="" className="bg-zinc-900">{t("allCategories")}</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id} className="bg-zinc-900">{cat.name}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="md:px-12 px-6 py-5 bg-brand-accent text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-brand-accent/10"
      >
        {t("searchButton")}
      </button>
    </form>
  );
}
