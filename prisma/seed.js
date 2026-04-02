const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    console.log('Starting seed...')

    // Clear existing data
    await prisma.application.deleteMany({})
    await prisma.product.deleteMany({})
    await prisma.category.deleteMany({})

    // Create Categories
    const suspension = await prisma.category.create({
        data: {
            name: 'Suspensão',
            slug: 'suspensao',
        },
    })

    const steering = await prisma.category.create({
        data: {
            name: 'Direção',
            slug: 'direcao',
        },
    })

    const transmission = await prisma.category.create({
        data: {
            name: 'Transmissão',
            slug: 'transmissao',
        },
    })

    const electrical = await prisma.category.create({
        data: {
            name: 'Elétrica',
            slug: 'eletrica',
        },
    })

    // Create Products
    const p1 = await prisma.product.create({
        data: {
            code: 'YOKO-S001',
            name: 'Amortecedor Dianteiro Direito',
            description: 'Amortecedor de alta performance com tecnologia de dupla ação.',
            oem: '12345678, 87654321',
            similar: 'COFAP-321, KYB-444',
            imageUrl: 'https://images.unsplash.com/photo-1635773100241-d2101e988222?auto=format&fit=crop&q=80',
            categoryId: suspension.id,
            applications: {
                create: [
                    { maker: 'Toyota', model: 'Corolla', yearStart: 2014, yearEnd: 2019, engine: '1.8 / 2.0 16V' },
                    { maker: 'Honda', model: 'Civic', yearStart: 2012, yearEnd: 2016, engine: '1.8 / 2.0' },
                ]
            }
        }
    })

    const p2 = await prisma.product.create({
        data: {
            code: 'YOKO-D002',
            name: 'Caixa de Direção Hidráulica',
            description: 'Caixa de direção completa com terminais e axiais.',
            oem: '99887766',
            similar: 'TRW-123',
            imageUrl: 'https://images.unsplash.com/photo-1549244444-667138097f4a?auto=format&fit=crop&q=80',
            categoryId: steering.id,
            applications: {
                create: [
                    { maker: 'Volkswagen', model: 'Gol G5/G6', yearStart: 2008, yearEnd: 2016, engine: '1.0 / 1.6' },
                    { maker: 'Fiat', model: 'Palio', yearStart: 2010, yearEnd: 2017, engine: '1.0 / 1.4' },
                ]
            }
        }
    })

    const p3 = await prisma.product.create({
        data: {
            code: 'YOKO-T003',
            name: 'Kit de Embreagem Completo',
            description: 'Plato, disco e rolamento. Durabilidade superior para trajetos urbanos.',
            oem: '55443322',
            similar: 'LUK-620',
            categoryId: transmission.id,
            applications: {
                create: [
                    { maker: 'Chevrolet', model: 'Onix', yearStart: 2013, yearEnd: 2021, engine: '1.0 / 1.4' },
                ]
            }
        }
    })

    const p4 = await prisma.product.create({
        data: {
            code: 'YOKO-E004',
            name: 'Bomba de Combustível Elétrica',
            description: 'Bomba interna de 3 bar para sistemas de injeção multiponto.',
            oem: '11223344',
            imageUrl: 'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&q=80',
            categoryId: electrical.id,
            applications: {
                create: [
                    { maker: 'Ford', model: 'Fiesta', yearStart: 2005, yearEnd: 2014, engine: '1.0 Rocam' },
                ]
            }
        }
    })

    console.log('Seed finished successfully!')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
