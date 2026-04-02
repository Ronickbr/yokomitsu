import { useTranslations } from "next-intl";
import { ShieldCheck, Award, Factory, Globe, Target, Star, Zap, Clock, ChevronDown, ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Counter from "@/components/ui/Counter";


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default function SobrePage() {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col flex-1 bg-black text-white selection:bg-brand-accent selection:text-white">
      {/* Page Header - High Tolerance Industrial */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
            alt="Yokomitsu Engineering"
            fill
            className="object-cover opacity-30 grayscale saturate-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
            >
              {t("tagline")}
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold mb-8 uppercase tracking-tighter leading-[0.9] text-center md:text-left">
              {t("title").split(' ').map((word, i) => (
                <span key={i} className={i % 2 !== 0 ? 'text-brand-accent' : ''}>{word} </span>
              ))}
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-2xl font-light leading-relaxed border-l-0 md:border-l border-brand-accent/50 md:pl-8 text-center md:text-left">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* History Section - Corrected Timeline & Site Style */}
      <section className="py-32 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

            {/* Left Column: Branding, Text and Stats */}
            <div className="flex flex-col gap-10">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                  {t("historyTitle")}
                </h2>
                <div className="w-20 h-1.5 bg-brand-accent mb-12 shadow-[0_0_15px_rgba(239,68,68,0.5)] mx-auto md:mx-0" />
                <div className="space-y-8">
                  {t("historyText").split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Stats Cards - Nakata Style */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {[
                  { label: t("cardCountries"), icon: Globe },
                  { label: t("cardYears"), icon: Clock },
                  { label: t("cardOEM"), icon: ShieldCheck },
                  { label: t("cardIPS"), icon: Zap },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-6 p-6 rounded-xl bg-zinc-900/50 border border-white/5 hover:border-brand-accent/30 hover:bg-zinc-900 transition-all duration-500 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center border border-white/10 group-hover:border-brand-accent/30 transition-colors">
                      <stat.icon className="w-7 h-7 text-brand-accent" />
                    </div>
                    <span className="text-lg font-display font-bold text-white uppercase tracking-wider leading-tight">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Vertical Timeline - Precision Aligned */}
            <div className="relative mt-20 lg:mt-0">
              {/* Visible Vertical Line Center-Aligned */}
              <div className="absolute left-[24px] md:left-[32px] top-8 bottom-0 w-[2px] bg-zinc-800" />
              <div className="absolute left-[24px] md:left-[32px] top-8 h-[80%] w-[2px] bg-gradient-to-b from-brand-accent to-transparent shadow-[0_0_10px_rgba(239,68,68,0.3)]" />

              <div className="space-y-12 relative">
                {[1, 2, 3, 4, 5].map((id) => (
                  <div key={id} className="relative flex gap-8 md:gap-12 group">
                    {/* Timeline Marker - Perfectly Centered on Line */}
                    <div className="relative z-10 flex-shrink-0 w-12 md:w-16 flex justify-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border-2 border-zinc-800 flex items-center justify-center group-hover:border-brand-accent transition-all duration-500 shadow-xl self-start mt-2">
                        {id === 5 ? (
                          <Star className="w-5 h-5 md:w-6 md:h-6 text-brand-accent fill-brand-accent" />
                        ) : (
                          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-zinc-700 group-hover:bg-brand-accent transition-colors" />
                        )}
                      </div>
                    </div>

                    {/* Timeline Content - Reduced Font Sizes */}
                    <div className="flex-1 pb-10">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="font-display text-2xl md:text-4xl font-black italic tracking-tighter text-white group-hover:text-brand-accent transition-colors leading-none">
                          {t(`timeline.${id}.year`)}
                        </span>
                        <div className="flex-1 h-px border-b border-dashed border-zinc-800 mt-1 opacity-50" />
                      </div>

                      <div className="font-display text-sm md:text-base font-black uppercase tracking-[0.2em] text-brand-accent mb-3">
                        {t(`timeline.${id}.title`)}
                      </div>

                      <p className="text-zinc-500 text-base md:text-lg font-light leading-relaxed max-w-md">
                        {t(`timeline.${id}.text`)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* End Point Indicator */}
              <div className="absolute left-[24px] md:left-[32px] bottom-[-30px] -translate-x-1/2 text-zinc-800 animate-pulse">
                <ChevronDown className="w-6 h-6 md:w-8 md:h-8" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Reach - Technical Spec Style */}
      <section className="py-32 bg-zinc-950 relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="bg-black border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-20 opacity-5 rotate-12 pointer-events-none">
              <Target className="w-96 h-96 text-white" />
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
              <div>
                <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-10 text-center md:text-left">{t("statsTitle")}</h2>
                <div className="space-y-12">
                  <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
                    <span className="font-display text-6xl md:text-8xl font-black text-brand-accent leading-none">
                      <Counter value={22} duration={2.5} />
                    </span>
                    <p className="font-display text-sm md:text-lg font-bold uppercase tracking-widest text-zinc-500 pb-2 leading-tight text-center md:text-left">{t("marketsServed")}</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-center md:items-end gap-4 md:gap-6">
                    <span className="font-display text-6xl md:text-8xl font-black text-white leading-none">
                      <Counter value={10} suffix="k+" duration={3} />
                    </span>
                    <p className="font-display text-sm md:text-lg font-bold uppercase tracking-widest text-zinc-500 pb-2 leading-tight uppercase tracking-widest text-center md:text-left">{t("productsInPortfolio")}</p>
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10 bg-brand-accent rounded-3xl shadow-[0_20px_50px_rgba(239,68,68,0.2)]">
                <Award className="w-12 h-12 md:w-16 md:h-16 text-white mb-6 md:mb-8" />
                <h3 className="font-display text-2xl md:text-3xl font-black text-white uppercase mb-4 md:mb-6 leading-tight">{t("certificationTitle")}</h3>
                <p className="text-white/90 text-base md:text-lg leading-relaxed font-light">{t("certificationDesc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
