import { prisma } from "@/lib/prisma";
import Reveal from "@/components/ui/Reveal";
import { Mail, Phone, MapPin, Camera, Globe, Save, Shield, Sliders } from "lucide-react";

export default async function SettingsPage() {
    // Fetch settings from DB
    const settings = await prisma.setting.findMany();
    const settingsMap = settings.reduce((acc, s) => ({ ...acc, [s.key]: s.value }), {} as any);

    // Default values if not set
    const contactEmail = settingsMap['contact_email'] || "sac@yokomitsu.com.br";
    const contactPhone = settingsMap['contact_phone'] || "+55 (11) 99999-9999";
    const contactAddress = settingsMap['contact_address'] || "Rua Industrial, 123 - São Paulo/SP";
    const socialInstagram = settingsMap['social_instagram'] || "@yokomitsu.brasil";
    const siteMaintenance = settingsMap['site_maintenance'] === 'true';

    return (
        <div className="space-y-12">
            <header>
                <Reveal direction="left">
                    <h1 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-2">Configurações</h1>
                    <p className="text-gray-500 font-medium">Controle global dos parâmetros da plataforma.</p>
                </Reveal>
            </header>

            <form action={async (formData) => {
                "use server";
                const email = formData.get("contact_email") as string;
                const phone = formData.get("contact_phone") as string;
                const address = formData.get("contact_address") as string;
                const instagram = formData.get("social_instagram") as string;

                const keys = {
                    "contact_email": email,
                    "contact_phone": phone,
                    "contact_address": address,
                    "social_instagram": instagram
                };

                for (const [key, value] of Object.entries(keys)) {
                    await prisma.setting.upsert({
                        where: { key },
                        update: { value },
                        create: { key, value }
                    });
                }
            }}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Settings */}
                    <div className="lg:col-span-2 space-y-8">
                        <Reveal delay={0.2} width="100%">
                            <section className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-6">
                                    <Phone className="w-5 h-5 text-brand-accent" />
                                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white">Canais de Contato</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Email de Atendimento</label>
                                        <div className="relative group">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-brand-accent transition-colors" />
                                            <input
                                                name="contact_email"
                                                defaultValue={contactEmail}
                                                className="w-full pl-12 pr-6 py-4 bg-black border border-white/5 rounded-xl text-sm focus:border-brand-accent outline-none transition-all"
                                                placeholder="exemplo@yokomitsu.com.br"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Telefone / WhatsApp</label>
                                        <div className="relative group">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-brand-accent transition-colors" />
                                            <input
                                                name="contact_phone"
                                                defaultValue={contactPhone}
                                                className="w-full pl-12 pr-6 py-4 bg-black border border-white/5 rounded-xl text-sm focus:border-brand-accent outline-none transition-all"
                                                placeholder="+55 (00) 00000-0000"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Endereço Físico (Opcional)</label>
                                        <div className="relative group">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-brand-accent transition-colors" />
                                            <input
                                                name="contact_address"
                                                defaultValue={contactAddress}
                                                className="w-full pl-12 pr-6 py-4 bg-black border border-white/5 rounded-xl text-sm focus:border-brand-accent outline-none transition-all"
                                                placeholder="Rua, Número, Bairro - Cidade/UF"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Instagram</label>
                                        <div className="relative group">
                                            <Camera className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700 group-focus-within:text-brand-accent transition-colors" />
                                            <input
                                                name="social_instagram"
                                                defaultValue={socialInstagram}
                                                className="w-full pl-12 pr-6 py-4 bg-black border border-white/5 rounded-xl text-sm focus:border-brand-accent outline-none transition-all"
                                                placeholder="@yokomitsu"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        <Reveal delay={0.4} width="100%">
                            <div className="flex justify-end pt-4">
                                <button
                                    type="submit"
                                    className="flex items-center gap-3 bg-white text-black px-10 py-5 font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-accent hover:text-white transition-all shadow-xl shadow-white/5"
                                >
                                    <Save className="w-4 h-4" />
                                    Salvar Alterações
                                </button>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar Settings */}
                    <div className="space-y-8">
                        <Reveal delay={0.3}>
                            <section className="bg-zinc-900 border border-white/5 rounded-[2.5rem] p-8 shadow-2xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <Shield className="w-5 h-5 text-blue-500" />
                                    <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white">Sistema & Segurança</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between p-4 bg-black border border-white/5 rounded-2xl">
                                        <div>
                                            <p className="text-xs font-bold text-white uppercase tracking-widest">Modo Manutenção</p>
                                            <p className="text-[10px] text-zinc-600 mt-1 uppercase">Bloqueia acesso ao site público</p>
                                        </div>
                                        <div className="w-12 h-6 bg-zinc-800 rounded-full relative cursor-not-allowed">
                                            <div className="absolute left-1 top-1 w-4 h-4 bg-zinc-600 rounded-full" />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-black border border-white/5 rounded-2xl">
                                        <div>
                                            <p className="text-xs font-bold text-white uppercase tracking-widest">Indexação SEO</p>
                                            <p className="text-[10px] text-zinc-600 mt-1 uppercase">Permite que o Google ache o site</p>
                                        </div>
                                        <div className="w-12 h-6 bg-emerald-500/20 border border-emerald-500/20 rounded-full relative cursor-not-allowed">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-emerald-500 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="bg-brand-accent/5 border border-brand-accent/10 p-8 rounded-[2rem]">
                                <Sliders className="w-8 h-8 text-brand-accent mb-4" />
                                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-2">Gerenciamento de Cache</h3>
                                <p className="text-xs text-gray-500 leading-relaxed uppercase font-bold tracking-tight">
                                    Limpe o cache global para forçar a atualização imediata de todas as páginas em todos os idiomas.
                                </p>
                                <button className="mt-6 text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent hover:text-white transition-colors">
                                    Invalidar Cache Local &rarr;
                                </button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </form>
        </div>
    );
}
