import { NextRequest, NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    // Mock de importação - agora que não usamos banco de dados
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Mock de importação concluído. (Modo Mockup Ativo)`
    });

  } catch (error: unknown) {
    console.error("Erro na importação:", error instanceof Error ? error.message : error);
    return NextResponse.json({ error: "Ocorreu um erro interno ao processar o arquivo." }, { status: 500 });
  }
}