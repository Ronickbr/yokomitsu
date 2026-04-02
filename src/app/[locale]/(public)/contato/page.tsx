import { getTranslations } from "next-intl/server";
import { Mail, Phone, Camera, MessageSquare, MapPin } from "lucide-react";
import Image from "next/image";
import { getSettings } from "@/lib/settings";
import ContactForm from "@/components/contact/ContactForm";

export default async function ContatoPage() {
  const settings = await getSettings();
  const t = await getTranslations("ContactPage");

  const contactChannels = [
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: settings.contact_phone,
      href: `https://wa.me/${settings.contact_phone.replace(/\D/g, '')}`
    },
    {
      icon: Phone,
      title: t("phone"),
      value: settings.contact_phone,
      href: `tel:${settings.contact_phone.replace(/\D/g, '')}`
    },
    {
      icon: Mail,
      title: t("email"),
      value: settings.contact_email,
      href: `mailto:${settings.contact_email}`
    },
    {
      icon: Camera,
      title: t("instagram"),
      value: settings.social_instagram,
      href: `https://instagram.com/${settings.social_instagram.replace('@', '')}`
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-black text-white selection:bg-brand-accent selection:text-white">
      {/* Page Header - Industrial Noir */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80"
            alt="Yokomitsu Support"
            fill
            className="object-cover opacity-20 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </div>

        <div className="container relative z-20 mx-auto px-6 pt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div
              className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md mx-auto"
            >
              {t("tagline")}
            </div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold mb-8 uppercase tracking-tighter leading-[0.9]">
              {t("title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

            {/* Contact Channels */}
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight mb-12">{t("channelsTitle")}</h2>

              <div className="space-y-4">
                {contactChannels.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center justify-between p-8 bg-zinc-900 border border-white/5 hover:border-brand-accent/30 transition-all rounded-2xl overflow-hidden relative"
                  >
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center group-hover:bg-brand-accent transition-colors">
                        <item.icon className="w-6 h-6 text-brand-accent group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">{item.title}</p>
                        <p className="text-lg font-medium text-white">{item.value}</p>
                      </div>
                    </div>
                    {/* Metallic Shine Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </a>
                ))}
              </div>

              {/* Technical Drawing Watermark */}
              <div className="mt-20 opacity-5 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100">
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.1" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.1" />
                </svg>
              </div>
            </div>

            {/* Form Column - Glassmorphism */}
            <div className="lg:col-span-7">
              <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
                <div className="bg-zinc-900/90 backdrop-blur-2xl p-10 md:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                  <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight mb-10">{t("formTitle")}</h2>

                  <ContactForm />

                  {/* Geometric Decoration */}
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-[100px]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Location Bar */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-brand-accent" />
              <div className="flex flex-col">
                <p className="text-gray-400 font-medium">{t("operationBrazil")}</p>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{settings.contact_address}</p>
              </div>
            </div>
            <div className="h-px flex-1 bg-white/5 hidden md:block mx-10" />
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">© 2026 {t("companyName")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
