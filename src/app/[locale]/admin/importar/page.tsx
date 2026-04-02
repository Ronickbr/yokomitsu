"use client";

import { useState } from "react";
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2, Download, CloudUpload } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function ImportarPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/admin/import", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult({ success: true, message: data.message || "Sincronização de catálogo concluída com sucesso!" });
        setFile(null);
        // Reset file input
        const fileInput = document.getElementById("file-upload") as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setResult({ success: false, message: data.error || "Falha na validação do arquivo técnico." });
      }
    } catch (error) {
      setResult({ success: false, message: "Erro crítico de transmissão. Verifique a rede." });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header>
        <Reveal direction="left">
          <h1 className="font-display text-4xl font-black text-white uppercase tracking-tighter mb-2">Engenharia de Dados</h1>
          <p className="text-gray-500 font-medium">Importação massiva de especificações técnicas.</p>
        </Reveal>
      </header>

      <Reveal delay={0.2} width="100%">
        <div className="bg-zinc-900 border border-white/5 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          {/* Industrial corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 -rotate-45 translate-x-16 -translate-y-16" />

          <p className="text-gray-400 font-medium mb-10 max-w-2xl leading-relaxed">
            Utilize o motor de importação Yokomitsu para processar planilhas Excel e atualizar o inventário global em segundos.
          </p>

          {/* Upload Area */}
          <div className="group relative">
            <input
              type="file"
              id="file-upload"
              accept=".xlsx, .xls"
              className="hidden"
              onChange={handleFileChange}
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer border-2 border-dashed border-white/10 rounded-[2rem] p-16 text-center flex flex-col items-center justify-center hover:border-brand-accent/50 hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-24 h-24 bg-brand-accent/10 text-brand-accent rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                <CloudUpload className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">
                {file ? file.name : "Soltar arquivo técnico"}
              </h3>
              <p className="text-sm font-bold text-zinc-500 tracking-widest uppercase">
                {file ? `${(file.size / 1024).toFixed(2)} KB` : "FORMATO EXCEL (.XLSX)"}
              </p>
            </label>
          </div>

          {/* Action Area */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 w-full">
              {result && (
                <div className={`flex items-center gap-3 p-5 rounded-2xl border ${result.success
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                  }`}>
                  {result.success ? <CheckCircle2 className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
                  <span className="font-bold text-sm uppercase tracking-widest">{result.message}</span>
                </div>
              )}
            </div>

            <button
              onClick={handleUpload}
              disabled={!file || isUploading}
              className={`w-full md:w-auto flex items-center justify-center gap-3 px-10 py-5 font-black uppercase tracking-[0.2em] text-sm transition-all duration-300 ${!file || isUploading
                  ? "bg-zinc-800 text-zinc-600 cursor-not-allowed"
                  : "bg-white text-black hover:bg-brand-accent hover:text-white shadow-xl shadow-white/5"
                }`}
            >
              {isUploading ? "PROCESSANDO..." : "INICIAR SINCRONIZAÇÃO"}
              {!isUploading && <Upload className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </Reveal>

      {/* Technical Protocol */}
      <Reveal delay={0.4}>
        <div className="bg-black border border-white/5 rounded-[2rem] p-10">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">Protocolo de Dados</h4>
            </div>
            <button
              onClick={() => window.open('/template_produtos.xlsx', '_blank')}
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
            >
              <Download className="w-3 h-3" />
              Download Template
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { key: "code", desc: "Identificador único de engenharia" },
              { key: "name", desc: "Nomenclatura oficial do componente" },
              { key: "category", desc: "Segmentação (Suspensão, Direção...)" },
              { key: "oem", desc: "Números originais de série" },
              { key: "maker", desc: "Montadora vinculada" },
              { key: "model", desc: "Modelo específico de veículo" },
            ].map((item) => (
              <div key={item.key} className="flex gap-4 items-start">
                <div className="bg-white/5 px-2 py-1 rounded text-[10px] font-mono text-brand-accent">{item.key}</div>
                <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  );
}
