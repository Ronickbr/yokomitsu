import { getTranslations } from "next-intl/server";
import { PackageSearch, ArrowRight, Layers, Search, Filter } from "lucide-react";
import { SearchForm } from "./SearchForm";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Tilt from "@/components/ui/Tilt";
import Reveal from "@/components/ui/Reveal";
import StatusTerminal from "./StatusTerminal";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/mock-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProductsPage" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProdutosPage(props: {
  searchParams: Promise<{ q?: string; category?: string }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q?.toLowerCase();
  const categoryId = searchParams?.category;
  const t = await getTranslations("ProductsPage");

  // Mock categories
  const categories = MOCK_CATEGORIES;

  // Filter products from mock data
  let products = MOCK_PRODUCTS;

  if (q) {
    products = products.filter(p =>
      p.code.toLowerCase().includes(q) ||
      p.oem?.toLowerCase().includes(q) ||
      p.similar?.toLowerCase().includes(q) ||
      p.name.toLowerCase().includes(q)
    );
  }

  if (categoryId) {
    products = products.filter(p => p.categoryId === categoryId);
  }

  return (
    <div className="flex flex-col flex-1 bg-black text-white selection:bg-brand-accent">
      {/* Page Header - Technical Blueprint Style */}
      <section className="relative pt-48 pb-24 overflow-hidden border-b border-white/5">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,0,15,0.05)_0%,transparent_70%)]" />
          <svg width="100%" height="100%" className="text-zinc-900 opacity-40">
            <pattern id="blueprint-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        <div className="container relative z-20 mx-auto px-6">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
                <Layers className="w-3 h-3" />
                Catálogo Técnico v0.1.7
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold mb-8 uppercase tracking-tighter leading-[0.85] md:leading-[0.8] text-white">
                Yokomitsu<br />
                <span className="text-brand-accent">Catálogo</span>
              </h1>
            </Reveal>
            <Reveal delay={0.6} direction="right">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center mt-8 md:mt-12">
                <p className="text-lg md:text-xl text-zinc-400 font-light max-w-xl leading-relaxed border-l-2 border-brand-accent pl-6 md:pl-8">
                  {t("subtitle")}
                </p>
                <div className="hidden lg:block">
                  <StatusTerminal />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative min-h-screen">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-accent/[0.02] to-transparent pointer-events-none" />

        <div className="container mx-auto px-6">

          {/* Search and Filter Bar - Precision Console */}
          <Reveal delay={0.2} width="100%">
            <div className="mb-24">
              <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-2 md:p-3 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]">
                <SearchForm
                  initialQ={q}
                  initialCategory={categoryId}
                  categories={categories.map(c => ({ id: c.id, name: c.name }))}
                />
              </div>
            </div>
          </Reveal>

          {/* Results Area */}
          {products.length === 0 ? (
            <Reveal>
              <div className="text-center py-48 bg-zinc-900/30 border border-dashed border-white/10 rounded-[3rem] backdrop-blur-sm">
                <PackageSearch className="w-24 h-24 text-zinc-800 mx-auto mb-8" />
                <h3 className="text-4xl font-bold uppercase tracking-tighter text-white mb-4">
                  {t("noResults")}
                </h3>
                <p className="text-zinc-500 max-w-md mx-auto">Nenhum componente encontrado com estes critérios. Tente verificar o código OEM ou use termos mais amplos.</p>
              </div>
            </Reveal>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <Reveal key={product.id} delay={index % 10 * 0.05} direction="up" height="100%" width="100%">
                  <Tilt className="h-full w-full">
                    <Link
                      href={`/produtos/${product.id}`}
                      className="group bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-[2rem] p-6 hover:border-brand-accent/30 transition-all duration-500 flex flex-col h-full w-full relative overflow-hidden"
                    >
                      {/* Grid overlay for tech look */}
                      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                      {/* Top Bar Label */}
                      <div className="flex justify-between items-center mb-8 relative z-10">
                        <span className="text-[9px] font-black text-brand-accent uppercase tracking-[0.3em] bg-brand-accent/10 px-2 py-0.5 rounded">
                          {product.category.name}
                        </span>
                        <span className="text-[9px] font-mono text-zinc-600 uppercase">
                          Ref: {product.id.slice(0, 8)}
                        </span>
                      </div>

                      {/* Product Image Area */}
                      <div className="relative aspect-square mb-8 bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center overflow-hidden group-hover:border-brand-accent/20 transition-colors">
                        {product.imageUrl ? (
                          <div className="relative w-full h-full p-6 transform transition-transform duration-700 group-hover:scale-110">
                            <img src={product.imageUrl} alt={product.name} className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" />
                          </div>
                        ) : (
                          <PackageSearch className="w-16 h-16 text-zinc-900 group-hover:text-zinc-800 transition-colors" />
                        )}

                        {/* Hover Scanner Effect */}
                        <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-accent/50 opacity-0 group-hover:animate-[scan_2s_linear_infinite] group-hover:opacity-100 shadow-[0_0_10px_#e3000f]" />
                      </div>

                      {/* Info Area */}
                      <div className="flex-1 flex flex-col relative z-10">
                        <h3 className="text-2xl font-black text-white group-hover:text-brand-accent transition-colors leading-none tracking-tighter mb-4">
                          {product.code}
                        </h3>

                        <h4 className="text-sm font-medium text-zinc-400 mb-6 line-clamp-2 leading-snug">
                          {product.name}
                        </h4>

                        <div className="space-y-2 mt-auto pb-6">
                          {product.oem && (
                            <div className="flex items-center justify-between text-[10px] pb-2 border-b border-white/5">
                              <span className="font-bold text-zinc-600 uppercase tracking-widest">OEM</span>
                              <span className="text-zinc-300 font-mono truncate max-w-[120px]">{product.oem.split(',')[0]}</span>
                            </div>
                          )}
                          <div className="flex items-center justify-between text-[10px]">
                            <span className="font-bold text-zinc-600 uppercase tracking-widest">Aplicações</span>
                            <span className="text-zinc-500 font-mono">{product.applications.length} registros</span>
                          </div>
                        </div>

                        {/* View Details Button */}
                        <div className="pt-6 border-t border-white/5 flex items-center justify-between group/btn">
                          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] group-hover/btn:text-white transition-colors">{t("details")}</span>
                          <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-zinc-950 group-hover/btn:bg-brand-accent group-hover/btn:border-brand-accent transition-all duration-300">
                            <ArrowRight className="w-4 h-4 text-white transform group-hover/btn:translate-x-0.5 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          )}
        </div>

        {/* CSS for Scan Animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes scan {
            0% { top: 0%; opacity: 0; }
            5% { opacity: 1; }
            95% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
          }
        `}} />
      </section>
    </div>
  );
}
