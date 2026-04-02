import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as xlsx from "xlsx";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado." }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const workbook = xlsx.read(buffer, { type: "buffer" });
    
    // Assumindo que os dados estão na primeira aba
    const firstSheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[firstSheetName];
    
    // Converter para JSON
    const data = xlsx.utils.sheet_to_json(worksheet) as any[];

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "A planilha está vazia ou mal formatada." }, { status: 400 });
    }

    let importedCount = 0;

    // Processar cada linha
    for (const row of data) {
      const code = row.code?.toString().trim();
      const name = row.name?.toString().trim();
      const categoryName = row.category?.toString().trim() || "Geral";

      if (!code || !name) continue; // Pular linhas inválidas

      // Garantir que a categoria existe
      let category = await prisma.category.findUnique({
        where: { name: categoryName }
      });

      if (!category) {
        category = await prisma.category.create({
          data: {
            name: categoryName,
            slug: categoryName.toLowerCase().replace(/\s+/g, '-')
          }
        });
      }

      // Upsert do produto
      const product = await prisma.product.upsert({
        where: { code },
        update: {
          name,
          oem: row.oem?.toString() || null,
          similar: row.similar?.toString() || null,
          categoryId: category.id,
        },
        create: {
          code,
          name,
          oem: row.oem?.toString() || null,
          similar: row.similar?.toString() || null,
          categoryId: category.id,
        }
      });

      // Adicionar aplicação se houver dados
      const maker = row.maker?.toString().trim();
      const model = row.model?.toString().trim();

      if (maker && model) {
        // Verificar se já existe a mesma aplicação
        const existingApp = await prisma.application.findFirst({
          where: {
            productId: product.id,
            maker,
            model,
            yearStart: row.yearStart ? parseInt(row.yearStart) : null,
          }
        });

        if (!existingApp) {
          await prisma.application.create({
            data: {
              maker,
              model,
              yearStart: row.yearStart ? parseInt(row.yearStart) : null,
              yearEnd: row.yearEnd ? parseInt(row.yearEnd) : null,
              productId: product.id,
            }
          });
        }
      }

      importedCount++;
    }

    return NextResponse.json({ 
      success: true, 
      message: `${importedCount} produtos processados com sucesso.` 
    });

  } catch (error: any) {
    console.error("Erro na importação:", error);
    return NextResponse.json({ error: "Ocorreu um erro interno ao processar o arquivo." }, { status: 500 });
  }
}