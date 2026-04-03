"use client";

import { useTranslations } from "next-intl";
import { Search, Filter } from "lucide-react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState } from "react";

export function SearchForm({
  initialQ = "",
  initialCategory = "",
  initialMaker = "",
  initialModel = "",
  initialYear = "",
  categories = [],
  makers = [],
  models = [],
  years = []
}: {
  initialQ?: string;
  initialCategory?: string;
  initialMaker?: string;
  initialModel?: string;
  initialYear?: string;
  categories: { id: string; name: string }[];
  makers: string[];
  models: string[];
  years: number[];
}) {
  const t = useTranslations("ProductsPage");
  const router = useRouter();
  const pathname = usePathname();

  const [q, setQ] = useState(initialQ);
  const [category, setCategory] = useState(initialCategory);
  const [maker, setMaker] = useState(initialMaker);
  const [model, setModel] = useState(initialModel);
  const [year, setYear] = useState(initialYear);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (maker) params.set("maker", maker);
    if (model) params.set("model", model);
    if (year) params.set("year", year);

    const query = params.toString();
    router.push(`${pathname}${query ? `?${query}` : ''}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2 rounded-2xl">
      {/* Top Filters Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="relative group">
          <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-4 h-4" />
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-zinc-900/50 border border-white/5 rounded-xl text-white text-sm outline-none focus:border-brand-accent/50 transition-all font-medium appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-950">{t("allYears")}</option>
            {years.map(y => (
              <option key={y} value={y} className="bg-zinc-950">{y}</option>
            ))}
          </select>
        </div>

        <div className="relative group">
          <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-4 h-4" />
          <select
            value={maker}
            onChange={(e) => setMaker(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-zinc-900/50 border border-white/5 rounded-xl text-white text-sm outline-none focus:border-brand-accent/50 transition-all font-medium appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-950">{t("allMakers")}</option>
            {makers.map(m => (
              <option key={m} value={m} className="bg-zinc-950">{m}</option>
            ))}
          </select>
        </div>

        <div className="relative group">
          <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-4 h-4" />
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="w-full pl-14 pr-6 py-4 bg-zinc-900/50 border border-white/5 rounded-xl text-white text-sm outline-none focus:border-brand-accent/50 transition-all font-medium appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-950">{t("allModels")}</option>
            {models.map(m => (
              <option key={m} value={m} className="bg-zinc-950">{m}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Search Row */}
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex-1 relative group">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("searchPlaceholder")}
            className="w-full pl-16 pr-6 py-5 bg-black/60 border border-white/5 rounded-xl text-white outline-none focus:border-brand-accent/50 transition-all font-medium placeholder:text-zinc-700"
          />
        </div>

        <div className="md:w-72 relative group">
          <Filter className="absolute left-6 top-1/2 -translate-y-1/2 text-zinc-600 group-focus-within:text-brand-accent transition-colors w-5 h-5" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full pl-16 pr-6 py-5 bg-black/60 border border-white/5 rounded-xl text-white outline-none focus:border-brand-accent/50 transition-all font-medium appearance-none cursor-pointer"
          >
            <option value="" className="bg-zinc-950">{t("allCategories")}</option>
            {categories.map(cat => (
              <option key={cat.id} value={cat.id} className="bg-zinc-950">{cat.name}</option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="md:px-12 px-6 py-5 bg-brand-accent text-white font-black uppercase tracking-widest text-xs rounded-xl hover:bg-white hover:text-black transition-all duration-300 shadow-xl shadow-brand-accent/10"
        >
          {t("searchButton")}
        </button>
      </div>
    </form>
  );
}
