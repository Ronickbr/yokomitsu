"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { Package, Upload, LayoutDashboard, Settings, LogOut, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Produtos", href: "/admin/produtos", icon: Package },
    { name: "Importar Planilha", href: "/admin/importar", icon: Upload },
    { name: "Configurações", href: "/admin/configuracoes", icon: Settings },
  ];

  const isActive = (path: string) => pathname?.endsWith(path);

  const handleLogout = () => {
    // Here logic to clear session/token
    // For now, just redirect to login
    router.push("/admin/login");
  };

  return (
    <div className="flex h-screen bg-[#0A0A0A] text-white selection:bg-brand-accent selection:text-white font-sans overflow-hidden">
      {/* Sidebar - Obsidian Industrial */}
      <aside
        className={`${isSidebarOpen ? "w-72" : "w-20"
          } bg-[#111111] border-r border-white/5 transition-all duration-500 ease-in-out flex flex-col relative z-50`}
      >
        <div className="p-8 border-b border-white/5 flex items-center justify-between overflow-hidden whitespace-nowrap">
          <Link href="/" className="flex items-center gap-2" title="Ir para o site público">
            <span className={`text-xl font-black tracking-tighter ${!isSidebarOpen && "hidden"}`}>
              YOKO<span className="text-brand-accent">MITSU</span>
            </span>
            {!isSidebarOpen && <span className="text-brand-accent font-black text-xl">Y</span>}
          </Link>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 hover:bg-white/5 rounded-lg transition-colors lg:flex hidden"
          >
            {isSidebarOpen ? <X className="w-5 h-5 text-gray-500" /> : <Menu className="w-5 h-5 text-gray-500" />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${active
                  ? "bg-brand-accent text-white"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                <span className={`font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap transition-opacity duration-300 ${isSidebarOpen ? "opacity-100" : "opacity-0 invisible absolute"
                  }`}>
                  {item.name}
                </span>
                {active && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-white opacity-50" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-4 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/5 transition-all"
          >
            <LogOut className="w-5 h-5 shrink-0" />
            <span className={`font-bold text-xs uppercase tracking-[0.2em] whitespace-nowrap ${isSidebarOpen ? "opacity-100" : "opacity-0 invisible absolute"
              }`}>
              Sair do Painel
            </span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-20 bg-[#0A0A0A] border-b border-white/5 flex items-center justify-between px-8 z-40">
          <div className="flex items-center gap-4 lg:hidden">
            <button className="p-2 text-white" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <Menu className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center gap-6 ml-auto relative">
            <div className="flex flex-col items-end">
              <span className="text-sm font-bold text-white leading-none">Administrador</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">IPS do Brasil</span>
            </div>

            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${isUserMenuOpen ? "bg-brand-accent text-white" : "bg-zinc-800 text-white border border-white/10 hover:border-brand-accent"}`}
              >
                <User className="w-5 h-5" />
              </button>

              {isUserMenuOpen && (
                <>
                  <div className="fixed inset-0 z-0" onClick={() => setIsUserMenuOpen(false)} />
                  <div className="absolute right-0 mt-3 w-56 bg-[#111111] border border-white/5 rounded-2xl shadow-2xl z-10 py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="px-4 py-3 border-b border-white/5">
                      <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-1">Logado como</p>
                      <p className="text-xs font-bold text-white truncate">admin@yokomitsu.com.br</p>
                    </div>

                    <Link
                      href="/admin/configuracoes"
                      className="flex items-center gap-3 px-4 py-3 text-xs font-bold text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <Settings className="w-4 h-4" />
                      Configurações
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-xs font-bold text-red-500 hover:bg-red-500/5 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sair do Sistema
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-10 bg-[#0A0A0A] custom-scrollbar relative">
          {/* Background Grid Accent */}
          <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none">
            <svg width="100%" height="100%">
              <pattern id="admin-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#admin-grid)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
