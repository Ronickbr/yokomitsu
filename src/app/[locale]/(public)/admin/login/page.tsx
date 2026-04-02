"use client";

import { useState } from "react";
import { Lock, User, Terminal, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";

export default function AdminLoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call and set a dummy cookie
    setTimeout(() => {
      document.cookie = "yokomitsu_admin_session=authenticated; path=/; max-age=86400";
      window.location.href = "/pt-BR/admin"; // Force reload to apply middleware rules
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#050505] relative overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E31E2415,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          <svg width="100%" height="100%">
            <pattern id="login-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#login-grid)" />
          </svg>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-md mx-auto"
        >
          {/* Brand Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 mb-8"
            >
              <ShieldCheck className="w-4 h-4 text-brand-accent" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">Sistemas Protegidos</span>
            </motion.div>

            <h1 className="text-5xl font-black text-white tracking-tighter mb-4">
              YOKO<span className="text-brand-accent">MITSU</span>
            </h1>
            <p className="text-zinc-500 font-medium uppercase tracking-[0.2em] text-[10px]">Portal de Administração Industrial</p>
          </div>

          {/* Login Card - Glassmorphism */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-accent/20 to-transparent rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />

            <div className="relative bg-[#0A0A0A] border border-white/5 p-10 md:p-12 rounded-[2.5rem] shadow-2xl backdrop-blur-3xl overflow-hidden">
              {/* Decorative Terminal Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30" />

              <form onSubmit={handleLogin} className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Protocolo de Identidade</label>
                  <div className="relative">
                    <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 focus-within:text-brand-accent transition-colors" />
                    <input
                      type="text"
                      required
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white placeholder:text-zinc-800 outline-none focus:border-brand-accent/40 transition-all font-mono text-sm"
                      placeholder="ADMIN_USER"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 ml-1">Chave de Acesso</label>
                  <div className="relative">
                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-14 pr-6 py-5 bg-black/40 border border-white/5 rounded-2xl text-white placeholder:text-zinc-800 outline-none focus:border-brand-accent/40 transition-all font-mono text-sm"
                      placeholder="••••••••••••"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full group relative overflow-hidden bg-white text-black py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-brand-accent hover:text-white disabled:opacity-50"
                >
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Autenticar Sistema</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </button>

                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Servidor Online</span>
                  </div>
                  <span className="text-[8px] font-bold text-zinc-700 uppercase tracking-widest italic">Encrypted Connection</span>
                </div>
              </form>

              {/* Cyber Subtle Lines */}
              <div className="absolute bottom-0 right-0 p-4 opacity-5 pointer-events-none">
                <Terminal className="w-20 h-20" />
              </div>
            </div>
          </div>

          {/* Footer Footer */}
          <div className="mt-12 text-center">
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-white transition-colors flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-zinc-800" />
              Voltar ao Site Público
              <span className="w-8 h-px bg-zinc-800" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}