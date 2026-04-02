import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { PackageSearch, ArrowLeft, ShieldCheck, Settings, CarFront, CalendarDays, FileText, ChevronRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import Reveal from "@/components/ui/Reveal";
import Image from "next/image";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, id: string }> }) {
  const { id } = await params;

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    return { title: "Produto não encontrado | Yokomitsu" };
  }

  return {
    title: `${product.code} - ${product.name} | Yokomitsu`,
    description: product.description || `Peça de reposição Yokomitsu ${product.code}. OEM: ${product.oem}`,
  };
}

export default async function ProductDetailPage(props: {
  params: Promise<{ locale: string, id: string }>;
}) {
  const { id } = await props.params;
  const t = await getTranslations("ProductsPage");

  const product = MOCK_PRODUCTS.find(p => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col flex-1 bg-black text-white min-h-screen">

      {/* Breadcrumb & Navigation */}
      <div className="border-b border-white/10 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-40">
        <div className="container mx-auto px-6 max-w-7xl py-4 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/produtos" className="hover:text-brand-accent transition-colors flex items-center gap-1">
            <ArrowLeft className="w-4 h-4" />
            {t("backToCatalog")}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-zinc-300 font-medium">{product.category.name}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-brand-accent font-bold tracking-wider">{product.code}</span>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Image & Technical Specs */}
          <div className="lg:col-span-4 space-y-8">
            <Reveal direction="left">
              <div className="relative group bg-zinc-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col items-center justify-center aspect-square overflow-hidden">
                {/* Technical background effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="grid-product" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-product)" />
                  </svg>
                </div>

                {product.imageUrl ? (
                  <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    />
                  </div>
                ) : (
                  <PackageSearch className="w-40 h-40 text-zinc-800" />
                )}

                {/* Industrial tag */}
                <div className="absolute top-4 right-4 bg-brand-accent text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest skew-x-[-12deg]">
                  Yokomitsu Original
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="bg-zinc-900/30 backdrop-blur-md rounded-3xl p-8 border border-white/5 space-y-6">
                <h3 className="text-sm font-black text-brand-accent uppercase tracking-[0.3em] flex items-center gap-2">
                  <Settings className="w-4 h-4" />
                  Especificações Técnicas
                </h3>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3 border-l-2 border-brand-accent pl-2">
                      {t("oemCodes")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.oem ? (
                        product.oem.split(',').map((code, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-zinc-800 border border-white/5 rounded text-xs font-mono text-zinc-300">
                            {code.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-zinc-600 italic">Informação não fornecida</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-3 border-l-2 border-zinc-700 pl-2">
                      {t("similarCodes")}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.similar ? (
                        product.similar.split(',').map((code, idx) => (
                          <span key={idx} className="px-3 py-1.5 bg-black/40 border border-white/5 rounded text-xs font-mono text-zinc-400">
                            {code.trim()}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-zinc-600 italic">Informação não fornecida</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Details & Applications */}
          <div className="lg:col-span-8 space-y-12">

            {/* Header Details */}
            <Reveal direction="up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-zinc-900 border border-white/10 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-brand-accent" />
                  <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">
                    {product.category.name}
                  </span>
                </div>

                <div>
                  <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-2 uppercase tracking-tighter">
                    {product.code}
                  </h1>
                  <h2 className="text-2xl text-zinc-400 font-light tracking-tight max-w-2xl">
                    {product.name}
                  </h2>
                </div>

                {product.description && (
                  <p className="text-zinc-500 text-lg leading-relaxed max-w-3xl font-light">
                    {product.description}
                  </p>
                )}
              </div>
            </Reveal>

            {/* Applications Section */}
            <Reveal direction="up" delay={0.3}>
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <h3 className="font-display text-3xl font-bold text-white uppercase tracking-tighter flex items-center gap-4">
                    <CarFront className="w-8 h-8 text-brand-accent" />
                    {t("applications")}
                  </h3>
                  <span className="text-zinc-500 text-xs font-bold uppercase tracking-widest">
                    {product.applications.length} registros encontrados
                  </span>
                </div>

                {product.applications.length === 0 ? (
                  <div className="p-12 text-center text-zinc-600 bg-zinc-900/20 rounded-3xl border border-dashed border-white/10">
                    Nenhuma aplicação cadastrada para este produto no momento.
                  </div>
                ) : (
                  <div className="group/table overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/20">
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-zinc-950/50 text-[10px] font-black text-zinc-500 uppercase tracking-widest border-b border-white/5">
                            <th className="p-6">{t("maker")}</th>
                            <th className="p-6">{t("model")}</th>
                            <th className="p-6 text-center">{t("year")}</th>
                            <th className="p-6">{t("notes")}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {product.applications.map((app) => (
                            <tr key={app.id} className="hover:bg-white/[0.03] transition-colors group/row">
                              <td className="p-6 font-bold text-zinc-300 uppercase tracking-tighter">{app.maker}</td>
                              <td className="p-6">
                                <div className="flex flex-col">
                                  <span className="text-white font-medium">{app.model}</span>
                                  {app.engine && (
                                    <span className="text-brand-accent text-[10px] font-black uppercase tracking-widest mt-1">
                                      {app.engine}
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-6 text-center">
                                {app.yearStart ? (
                                  <span className="px-3 py-1 bg-zinc-800 border border-white/5 rounded text-[10px] font-mono text-zinc-400">
                                    {app.yearStart} {app.yearEnd ? `- ${app.yearEnd}` : 'em diante'}
                                  </span>
                                ) : (
                                  <span className="text-zinc-700">-</span>
                                )}
                              </td>
                              <td className="p-6 text-xs text-zinc-500 leading-relaxed max-w-xs">
                                {app.notes || <span className="text-zinc-800 italic">Sem observações</span>}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </div>
  );
}
