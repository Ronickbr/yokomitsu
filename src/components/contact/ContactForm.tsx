"use client";

import { useTranslations } from "next-intl";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {
    const t = useTranslations("ContactPage");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSuccess(true);

        // Reset form after success
        setTimeout(() => {
            setIsSuccess(false);
            (e.target as HTMLFormElement).reset();
        }, 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("formName")}</label>
                    <input
                        required
                        name="name"
                        className="w-full bg-black/50 border-b border-white/10 focus:border-brand-accent py-4 outline-none transition-colors text-white placeholder:text-zinc-700"
                        placeholder={t("formName")}
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("formPhone")}</label>
                    <input
                        required
                        name="phone"
                        className="w-full bg-black/50 border-b border-white/10 focus:border-brand-accent py-4 outline-none transition-colors text-white placeholder:text-zinc-700"
                        placeholder="+55 (11) 00000-0000"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("formEmail")}</label>
                <input
                    required
                    type="email"
                    name="email"
                    className="w-full bg-black/50 border-b border-white/10 focus:border-brand-accent py-4 outline-none transition-colors text-white placeholder:text-zinc-700"
                    placeholder={t("emailPlaceholder")}
                />
            </div>

            <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{t("formMessage")}</label>
                <textarea
                    required
                    name="message"
                    rows={4}
                    className="w-full bg-black/50 border-b border-white/10 focus:border-brand-accent py-4 outline-none transition-colors text-white placeholder:text-zinc-700 resize-none"
                    placeholder={t("formMessage")}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`group relative w-full overflow-hidden flex items-center justify-center gap-4 px-8 py-6 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 ${isSuccess ? "bg-green-600 text-white" : "bg-brand-accent text-white hover:bg-white hover:text-black"
                    }`}
            >
                <span className="relative z-10">
                    {isSubmitting ? t("submitting") : isSuccess ? t("sent") : t("formSubmit")}
                </span>
                <div className="relative z-10 transition-transform group-hover:translate-x-2">
                    {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                </div>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
        </form>
    );
}
