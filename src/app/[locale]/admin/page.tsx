import { Package, FolderTree, Activity, ArrowUpRight, TrendingUp } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { MOCK_PRODUCTS, MOCK_CATEGORIES } from "@/lib/mock-data";

export default async function AdminDashboard() {
  const productsCount = MOCK_PRODUCTS.length;
  const categoriesCount = MOCK_CATEGORIES.length;
  const applicationsCount = MOCK_PRODUCTS.reduce((acc, p) => acc + p.applications.length, 0);

  const stats = [
    {
      label: "Total de Produtos",
      value: productsCount,
      icon: Package,
      color: "text-brand-accent",
      bg: "bg-brand-accent/10",
      border: "border-brand-accent/20"
    },
    {
      label: "Categorias Ativas",
      value: categoriesCount,
      icon: FolderTree,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      label: "Aplicações de Veículos",
      value: applicationsCount,
      icon: Activity,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
  ];

  return (
    <div className="space-y-12">
      <header>
        <Reveal direction="left">
          <h1 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-2">Visão Geral</h1>
          <p className="text-gray-500 font-medium">Bem-vindo ao centro de comando Yokomitsu. (Modo Mockup)</p>
        </Reveal>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.1}>
            <div className="group bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:border-white/10 transition-all relative overflow-hidden">
              {/* Accent line */}
              <div className={`absolute top-0 left-0 w-1 h-full ${stat.color.replace('text-', 'bg-')} opacity-50 group-hover:opacity-100 transition-opacity`} />

              <div className="flex justify-between items-start mb-8">
                <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl border ${stat.border}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-700" />
              </div>

              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-5xl font-black text-white tracking-tighter">{stat.value}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
                <TrendingUp className="w-3 h-3" />
                <span>Dados de demonstração (Mockup)</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Placeholder for Recent Activity / Quick Actions */}
      <Reveal delay={0.4}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10">
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-xs">Atividade Recente</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 border-b border-white/5 pb-4 last:border-0">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mt-2 shrink-0" />
                  <div>
                    <p className="text-sm font-bold text-gray-300">Produto YOKO-S00{i} atualizado</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">HÁ {i * 10} MINUTOS</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-10 flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Activity className="w-10 h-10 text-gray-600" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Modo Visualização</h3>
            <p className="text-gray-500 text-sm max-w-xs">
              O painel administrativo está operando com dados estáticos para demonstração de UI.
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
