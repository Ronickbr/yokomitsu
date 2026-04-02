import { Plus, Search, Edit, Trash2, PackageSearch, ExternalLink } from "lucide-react";
import { Link } from "@/i18n/routing";
import Reveal from "@/components/ui/Reveal";
import { MOCK_PRODUCTS } from "@/lib/mock-data";

export default async function AdminProductsPage(props: {
  searchParams: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  const q = searchParams?.q?.toLowerCase() || "";

  // Mock data filtered
  const products = MOCK_PRODUCTS.filter(p =>
    p.code.toLowerCase().includes(q) ||
    p.name.toLowerCase().includes(q)
  );

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <Reveal direction="left">
            <h1 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-2">Inventário</h1>
            <p className="text-gray-500 font-medium">Gestão técnica de componentes. (Modo Mockup)</p>
          </Reveal>
        </div>
        <Reveal direction="right">
          <button className="flex items-center gap-2 bg-brand-accent/50 text-white/50 px-6 py-4 font-black uppercase tracking-widest text-xs cursor-not-allowed">
            <Plus className="w-4 h-4" />
            Adicionar (Desativado)
          </button>
        </Reveal>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">

        {/* Search Bar */}
        <div className="p-6 border-b border-white/5 bg-zinc-900/50">
          <form className="relative max-w-xl group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600 w-5 h-5 group-focus-within:text-brand-accent transition-colors" />
            <input
              type="text"
              name="q"
              defaultValue={q}
              placeholder="Pesquisar nos mockups por Código ou Nome..."
              className="w-full pl-12 pr-6 py-4 rounded-xl border border-white/5 bg-black text-sm text-white focus:border-brand-accent outline-none transition-all placeholder:text-zinc-700"
            />
          </form>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-black text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 border-b border-white/5">
                <th className="p-6">Componente / Código</th>
                <th className="p-6">Categoria</th>
                <th className="p-6 text-center">Aplicações</th>
                <th className="p-6 text-right">Controle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 bg-zinc-900/20">
              {products.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-20 text-center">
                    <PackageSearch className="w-12 h-12 text-zinc-800 mx-auto mb-4" />
                    <p className="text-zinc-600 font-bold uppercase tracking-widest text-xs">Nenhum componente mockup localizado</p>
                  </td>
                </tr>
              ) : (
                products.map((product) => (
                  <tr key={product.id} className="hover:bg-white/5 transition-colors group">
                    <td className="p-6">
                      <div className="flex flex-col">
                        <span className="text-lg font-black text-white group-hover:text-brand-accent transition-colors leading-none tracking-tight">{product.code}</span>
                        <span className="text-xs text-zinc-500 mt-1 font-medium">{product.name}</span>
                      </div>
                    </td>
                    <td className="p-6">
                      <span className="inline-block px-3 py-1 bg-zinc-800 border border-white/5 text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-lg">
                        {product.category.name}
                      </span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-xs font-bold text-zinc-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">
                        {product.applications.length} VÉICULOS
                      </span>
                    </td>
                    <td className="p-6 text-right">
                      <div className="flex items-center justify-end gap-3">
                        <Link href={`/produtos/${product.id}`} target="_blank" className="p-3 bg-zinc-800/50 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-xl transition-all" title="Visualizar">
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                        <button className="p-3 bg-zinc-800/20 text-zinc-700 cursor-not-allowed rounded-xl transition-all" title="Editar bloqueado">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-3 bg-zinc-800/20 text-zinc-700 cursor-not-allowed rounded-xl transition-all" title="Excluir bloqueado">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Info */}
        <div className="p-6 bg-black border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Mostrando {products.length} componentes estáticos</span>
        </div>
      </div>
    </div>
  );
}