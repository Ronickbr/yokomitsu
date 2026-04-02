import { useTranslations } from "next-intl";
import { Globe, ShieldCheck, Wrench, ArrowRight, Zap, Target } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import Magnetic from "@/components/ui/Magnetic";
import Tilt from "@/components/ui/Tilt";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col flex-1 bg-black selection:bg-brand-accent selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Parallax & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-steering.png"
            alt="Yokomitsu Cinematic Industrial"
            fill
            className="object-cover opacity-60 scale-105 animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-6 pt-20">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <div
                className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
              >
                <Zap className="w-3 h-3 fill-brand-accent" />
                {t("tagline")}
              </div>
            </Reveal>

            <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-8 mt-12 md:mt-0">
              <Reveal delay={0.4}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter text-white text-center md:text-left">
                  YOKO<br /><span className="text-brand-accent">MITSU</span>
                </h1>
              </Reveal>
              <Reveal delay={0.6} direction="left" className="pb-2">
                <div className="relative w-32 h-32 md:w-56 md:h-56 lg:w-72 lg:h-72 drop-shadow-[0_0_30px_rgba(251,1,1,0.3)] anim-float transform md:-ml-8 lg:-ml-12">
                  <Image
                    src="/mascote.png"
                    alt="Mascote Yokomitsu"
                    fill
                    className="object-contain"
                  />
                </div>
              </Reveal>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
              <Reveal delay={0.6} direction="right">
                <p className="text-lg md:text-2xl font-light text-gray-300 max-w-xl leading-relaxed border-l-0 md:border-l border-brand-accent/50 md:pl-8 text-center md:text-left">
                  {t("slogan")}
                </p>
              </Reveal>

              <Reveal delay={0.8} direction="up" className="w-full md:w-auto">
                <Magnetic strength={0.3}>
                  <Link
                    href="/contato"
                    className="group relative flex md:inline-flex items-center justify-center gap-4 bg-brand-accent text-white px-8 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 overflow-hidden w-full md:w-auto"
                  >
                    <span className="relative z-10">{t("ctaDistributor")}</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
                    <div className="absolute -inset-x-20 inset-y-0 bg-white/20 -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
                  </Link>
                </Magnetic>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Technical Detail Watermark */}
        <div className="absolute bottom-10 right-10 opacity-5 pointer-events-none hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 200 200" className="animate-spin-slow">
            <path
              fill="currentColor"
              className="text-white"
              d="M100 0 A100 100 0 1 0 200 100 A100 100 0 0 0 100 0 M100 20 A80 80 0 1 1 20 100 A80 80 0 0 1 100 20"
            />
            <circle cx="100" cy="100" r="10" fill="currentColor" />
            <rect x="95" y="0" width="10" height="40" fill="currentColor" />
            <rect x="95" y="160" width="10" height="40" fill="currentColor" />
            <rect x="0" y="95" width="40" height="10" fill="currentColor" />
            <rect x="160" y="95" width="40" height="10" fill="currentColor" />
          </svg>
        </div>
      </section>

      {/* Categories Bento Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
                  {t("productLines")}
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-gray-400 text-lg">
                  {t("productLinesDesc")}
                </p>
              </Reveal>
            </div>
            <Magnetic strength={0.2}>
              <Link href="/produtos" className="group flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-sm pb-2 border-b border-brand-accent/20 hover:border-brand-accent duration-300">
                {t("viewFullCatalog")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 auto-rows-[400px]">
            {/* Steering - Large Card */}
            <Reveal width="100%" height="100%" delay={0.2} direction="up" className="md:col-span-2 lg:col-span-2 shadow-2xl">
              <Link
                href="/produtos?category=direcao"
                className="block w-full h-full relative group bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <Tilt className="w-full h-full">
                  <Image
                    src="https://blogaragem.com.br/wp-content/uploads/2023/10/o-que-e-direcao-hidraulica-1110x450.webp"
                    alt={t("products.steering")}
                    fill
                    className="object-cover opacity-50 group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 md:bottom-16 md:left-12 md:right-12">
                    <Wrench className="w-10 h-10 md:w-12 md:h-12 text-brand-accent mb-4 md:mb-6" />
                    <h3 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-4 md:mb-6">{t("products.steering")}</h3>
                    <p className="text-gray-300 max-w-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-0 md:translate-y-4 group-hover:translate-y-0 text-base md:text-lg">
                      {t("products.steeringDesc")}
                    </p>
                  </div>
                </Tilt>
              </Link>
            </Reveal>

            {/* Suspension */}
            <Reveal width="100%" height="100%" delay={0.4} direction="up" className="md:col-span-2 lg:col-span-1 shadow-2xl">
              <Link
                href="/produtos?category=suspensao"
                className="block w-full h-full relative group bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <Tilt className="w-full h-full">
                  <Image
                    src="https://garagem360.com.br/wp-content/uploads/2025/08/1_suspensao.webp"
                    alt={t("products.suspension")}
                    fill
                    className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-16 left-12">
                    <ShieldCheck className="w-12 h-12 text-brand-accent mb-6" />
                    <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter">{t("products.suspension")}</h3>
                  </div>
                </Tilt>
              </Link>
            </Reveal>

            {/* Transmission */}
            <Reveal width="100%" height="100%" delay={0.6} direction="up" className="md:col-span-2 lg:col-span-1 shadow-2xl">
              <Link
                href="/produtos?category=transmissao"
                className="block w-full h-full relative group bg-zinc-900 rounded-3xl overflow-hidden"
              >
                <Tilt className="w-full h-full">
                  <Image
                    src="https://suaoficinaonline.com.br/conteudo/content/images/2018/02/Transmissao-carro-1.jpg"
                    alt={t("products.transmission")}
                    fill
                    className="object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-16 left-12">
                    <Globe className="w-12 h-12 text-brand-accent mb-6" />
                    <h3 className="font-display text-3xl font-black text-white uppercase tracking-tighter">{t("products.transmission")}</h3>
                    <p className="text-gray-400 mt-2 text-sm italic">{t("products.transmissionDesc")}</p>
                  </div>
                </Tilt>
              </Link>
            </Reveal>

            {/* Electrical Systems - Large Card */}
            <Reveal width="100%" height="100%" delay={0.8} direction="up" className="md:col-span-2 lg:col-span-2 shadow-2xl">
              <Link
                href="/produtos?category=eletrica"
                className="block w-full h-full relative group bg-zinc-800 rounded-3xl border border-white/5 overflow-hidden"
              >
                <Tilt className="w-full h-full">
                  <Image
                    src="https://ciaauto.wordpress.com/wp-content/uploads/2018/01/chicote.jpg"
                    alt={t("products.electrical")}
                    fill
                    className="object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10 md:bottom-16 md:left-12 md:right-12 flex justify-between items-end">
                    <div>
                      <Zap className="w-10 h-10 md:w-12 md:h-12 text-brand-accent mb-4 md:mb-6 animate-pulse" />
                      <h3 className="font-display text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">{t("products.electrical")}</h3>
                      <p className="text-gray-300 mt-4 md:mt-6 max-w-md text-base md:text-lg">{t("products.electricalDesc")}</p>
                    </div>
                  </div>
                </Tilt>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>



      {/* Manufacturing Highlights - Full-Bleed Image Cards */}
      <section className="bg-black py-24 lg:py-0">
        <div className="container mx-auto px-6 mb-12 lg:mb-16 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter mb-4 leading-tight md:leading-none">
              {t("productionStandardTitle")} <br className="block md:hidden" /> <span className="text-brand-accent">{t("productionStandardTitleHighlight")}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-gray-500 text-xs md:text-base font-medium max-w-3xl mx-auto uppercase tracking-[0.2em] md:tracking-[0.4em] leading-relaxed">
              {t("productionStandardSubtitle")}
            </p>
          </Reveal>
        </div>


        <div className="flex flex-col lg:flex-row h-auto lg:h-[85vh] w-full bg-zinc-950 overflow-hidden group/highlights">
          {/* Item 1: Controle de Qualidade */}
          <div className="relative flex-1 group h-[350px] md:h-[450px] lg:h-full overflow-hidden transition-all duration-1000 lg:hover:flex-[2]">
            <Image
              src="/qc.png"
              alt={t("highlights.qc.title") + " " + t("highlights.qc.title2")}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-700" />

            {/* Title Top */}
            <div className="absolute inset-x-0 top-0 p-8 md:p-10 lg:p-12 z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white uppercase leading-none tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                {t("highlights.qc.title")} <br /> {t("highlights.qc.title2")}
              </h3>
            </div>

            {/* Description Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 bg-gradient-to-t from-black via-black/20 to-transparent z-10">
              <p className="text-gray-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100 text-sm max-w-[280px] leading-relaxed font-light">
                {t("highlights.qc.desc")}
              </p>
            </div>
          </div>

          {/* Item 2: Tecnologia de Ponta */}
          <div className="relative flex-1 group h-[350px] md:h-[450px] lg:h-full overflow-hidden transition-all duration-1000 lg:hover:flex-[2]">
            <Image
              src="/tech.png"
              alt={t("highlights.tech.title") + " " + t("highlights.tech.title2")}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-700" />

            {/* Title Top */}
            <div className="absolute inset-x-0 top-0 p-8 md:p-10 lg:p-12 z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white uppercase leading-none tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                {t("highlights.tech.title")} <br /> {t("highlights.tech.title2")}
              </h3>
            </div>

            {/* Description Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 bg-gradient-to-t from-black via-black/20 to-transparent z-10">
              <p className="text-gray-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100 text-sm max-w-[280px] leading-relaxed font-light">
                {t("highlights.tech.desc")}
              </p>
            </div>
          </div>

          {/* Item 3: Garantia */}
          <div className="relative flex-1 group h-[350px] md:h-[450px] lg:h-full overflow-hidden transition-all duration-1000 lg:hover:flex-[2]">
            <Image
              src="/warranty.png"
              alt={t("highlights.warranty.title") + " " + t("highlights.warranty.title2")}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-700" />

            {/* Title Top */}
            <div className="absolute inset-x-0 top-0 p-8 md:p-10 lg:p-12 z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white uppercase leading-none tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                {t("highlights.warranty.title")} <br /> {t("highlights.warranty.title2")}
              </h3>
            </div>

            {/* Description Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 bg-gradient-to-t from-black via-black/20 to-transparent z-10">
              <p className="text-gray-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100 text-sm max-w-[280px] leading-relaxed font-light">
                {t("highlights.warranty.desc")}
              </p>
            </div>
          </div>

          {/* Item 4: Matéria-Prima */}
          <div className="relative flex-1 group h-[350px] md:h-[450px] lg:h-full overflow-hidden transition-all duration-1000 lg:hover:flex-[2]">
            <Image
              src="/material.png"
              alt={t("highlights.material.title") + " " + t("highlights.material.title2")}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-700" />

            {/* Title Top */}
            <div className="absolute inset-x-0 top-0 p-8 md:p-10 lg:p-12 z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white uppercase leading-none tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                {t("highlights.material.title")} <br /> {t("highlights.material.title2")}
              </h3>
            </div>

            {/* Description Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 bg-gradient-to-t from-black via-black/20 to-transparent z-10">
              <p className="text-gray-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100 text-sm max-w-[280px] leading-relaxed font-light">
                {t("highlights.material.desc")}
              </p>
            </div>
          </div>

          {/* Item 5: Sustentabilidade */}
          <div className="relative flex-1 group h-[350px] md:h-[450px] lg:h-full overflow-hidden transition-all duration-1000 lg:hover:flex-[2]">
            <Image
              src="/eco.png"
              alt={t("highlights.sustainability.title") + " " + t("highlights.sustainability.title2")}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-[2000ms] grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/70 group-hover:bg-black/30 transition-all duration-700" />

            {/* Title Top */}
            <div className="absolute inset-x-0 top-0 p-8 md:p-10 lg:p-12 z-20">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white uppercase leading-none tracking-tighter group-hover:text-brand-accent transition-colors duration-500">
                {t("highlights.sustainability.title")} <br /> {t("highlights.sustainability.title2")}
              </h3>
            </div>

            {/* Description Bottom */}
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10 lg:p-12 bg-gradient-to-t from-black via-black/40 to-transparent z-10">
              <p className="text-gray-300 opacity-100 md:opacity-0 group-hover:opacity-100 transform translate-y-0 md:translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100 text-sm max-w-[280px] leading-relaxed font-light">
                {t("highlights.sustainability.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Global & Importer Section - Glassmorphism */}

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-zinc-900/50 skew-y-3 transform origin-right" />

        {/* World Map Background - Enhanced for Glass Visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
          <img
            src="https://png.pngtree.com/png-vector/20250610/ourmid/pngtree-world-map-silhouette-style-interconnected-network-png-image_16512519.png"
            alt="World Map"
            className="w-[70%] max-w-[500px] lg:max-w-[650px] h-auto object-contain opacity-[0.15]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <Reveal>
                <h2 className="font-display text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter leading-none uppercase">
                  {t("globalPresence")}
                </h2>
              </Reveal>
              <Reveal delay={0.4}>
                <p className="text-2xl text-gray-300 font-light mb-12 leading-relaxed">
                  {t("globalPresenceDesc")}
                </p>
              </Reveal>

              <div className="flex flex-wrap gap-12">
                <Reveal delay={0.6}>
                  <div>
                    <span className="block text-6xl font-bold text-brand-accent mb-2">
                      <Counter value={22} />
                    </span>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t("stats.countries")}</span>
                  </div>
                </Reveal>
                <Reveal delay={0.8}>
                  <div>
                    <span className="block text-6xl font-bold text-brand-accent mb-2">
                      <Counter value={40} suffix="+" />
                    </span>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t("stats.years")}</span>
                  </div>
                </Reveal>
                <Reveal delay={1.0}>
                  <div>
                    <span className="block text-6xl font-bold text-brand-accent mb-2">
                      <Counter value={10} suffix="K" />
                    </span>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">{t("stats.products")}</span>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="relative">
              {/* Ultra Glassmorphism Card - Minimal Blur for High Transparency */}
              <div className="relative bg-white/[0.01] backdrop-blur-sm border border-white/20 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden group/glass hover:bg-white/[0.03] transition-colors duration-500">
                {/* Glass Shine/Reflection Effect - Sharper */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 bg-brand-accent/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border border-white/20">
                  <span className="text-3xl md:text-4xl font-black italic text-brand-accent tracking-tighter select-none">IPS</span>
                </div>
                <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight">{t("officialImporterTitle")}</h3>
                <p className="relative z-10 text-lg md:text-xl text-gray-400 leading-relaxed mb-8 md:mb-10 font-light">
                  {t("officialImporter")}
                </p>
                <Link
                  href="/sobre"
                  className="relative z-10 inline-flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs md:text-sm group/link"
                >
                  {t("knowIps")} <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform text-brand-accent" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-40 bg-brand-accent relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Reveal width="100%">
            <h2 className="font-display text-5xl md:text-8xl font-bold text-white mb-6 uppercase tracking-tighter">
              {t("readyToAccelerate")}
            </h2>
          </Reveal>
          <Reveal width="100%" delay={0.2}>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
              {t("beDistributorDesc")}
            </p>
          </Reveal>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Magnetic strength={0.2}>
              <Link
                href="/contato"
                className="bg-black text-white px-12 py-6 rounded-none text-lg font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl shadow-black/40"
              >
                {t("beDistributor")}
              </Link>
            </Magnetic>
            <Magnetic strength={0.2}>
              <Link
                href="/produtos"
                className="bg-transparent border-2 border-white text-white px-12 py-6 rounded-none text-lg font-black uppercase tracking-widest hover:bg-white hover:text-brand-accent transition-colors"
              >
                {t("downloadCatalog")}
              </Link>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
