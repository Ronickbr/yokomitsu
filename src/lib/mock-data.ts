export const MOCK_CATEGORIES = [
    { id: "cat_direcao", name: "Direção", slug: "direcao" },
    { id: "cat_suspensao", name: "Suspensão", slug: "suspensao" },
    { id: "cat_transmissao", name: "Transmissão", slug: "transmissao" },
    { id: "cat_eletrica", name: "Elétrica", slug: "eletrica" },
];

export const MOCK_PRODUCTS = [
    {
        id: "prod_1",
        code: "YKM-7701",
        name: "Terminal de Direção Lado Direito",
        description: "Componente de alta precisão para sistemas de direção hidráulica e mecânica. Fabricado com aço de alta pureza para máxima durabilidade.",
        oem: "518.402.11, 467.552.01",
        similar: "N-99001, CE-6002",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_612265-MLB45620155452_042021-O.webp",
        categoryId: "cat_direcao",
        category: MOCK_CATEGORIES[0],
        applications: [
            { id: "app_1", maker: "FIAT", model: "PALIO", yearStart: 2012, yearEnd: 2017, engine: "1.0/1.4 8V", notes: "Novo Palio" },
            { id: "app_2", maker: "FIAT", model: "GRAND SIENA", yearStart: 2012, yearEnd: 2021, engine: "1.4/1.6 16V", notes: "Exceto Dualogic" },
        ]
    },
    {
        id: "prod_2",
        code: "YKM-8850",
        name: "Pivô de Suspensão Inferior",
        description: "Pivô de suspensão reforçado com banho de titânio para resistência superior à corrosão e fadiga.",
        oem: "JBJ711, 54500-1HA0A",
        similar: "N-1011, PS-822",
        imageUrl: "https://autopecasdragao.com.br/wp-content/uploads/2021/05/pivo-de-suspensao-inferior-esquerdo-direito-march-2012-em-diante-versas-2012-em-diante-nakata.webp",
        categoryId: "cat_suspensao",
        category: MOCK_CATEGORIES[1],
        applications: [
            { id: "app_3", maker: "NISSAN", model: "MARCH", yearStart: 2011, yearEnd: 2020, engine: "1.0/1.6", notes: "" },
            { id: "app_4", maker: "NISSAN", model: "VERSA", yearStart: 2011, yearEnd: 2019, engine: "1.6", notes: "Modelo antigo" },
        ]
    },
    {
        id: "prod_3",
        code: "YKM-3321",
        name: "Junta Homocinética Lado Roda",
        description: "Transmissão suave de torque com tecnologia de esferas temperadas para baixo ruído e vibração.",
        oem: "1K0.498.099, 1K0.407.311",
        similar: "AL-1002, JHC01104",
        imageUrl: "https://www.canaldeatendimento.com.br/wp-content/uploads/2020/07/junta-homocinetica-roda-volkswagen-gol-voyage-g5-g6-polo-fox-16-cofap-jhc01104.jpg",
        categoryId: "cat_transmissao",
        category: MOCK_CATEGORIES[2],
        applications: [
            { id: "app_5", maker: "VOLKSWAGEN", model: "GOL G5/G6", yearStart: 2008, yearEnd: 2016, engine: "1.6", notes: "Com ABS" },
            { id: "app_6", maker: "VOLKSWAGEN", model: "VOYAGE", yearStart: 2009, yearEnd: 2016, engine: "1.6", notes: "" },
        ]
    },
    {
        id: "prod_4",
        code: "YKM-1044",
        name: "Bieleta da Barra Estabilizadora Dianteira",
        description: "Bieleta metálica de alta performance. Garante estabilidade nas curvas e redução de ruídos na suspensão.",
        oem: "54830-2H000, 54830-0U000",
        similar: "N-99052, N93036",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_918548-MLB49320145228_032022-O.webp",
        categoryId: "cat_suspensao",
        category: MOCK_CATEGORIES[1],
        applications: [
            { id: "app_7", maker: "HYUNDAI", model: "HB20", yearStart: 2012, yearEnd: 2022, engine: "1.0/1.6", notes: "" },
            { id: "app_8", maker: "KIA", model: "RIO", yearStart: 2012, yearEnd: 2020, engine: "1.6", notes: "" },
        ]
    },
    {
        id: "prod_5",
        code: "YKM-6612",
        name: "Amortecedor de Direção Reforçado",
        description: "Controle absoluto em terrenos irregulares. Desenvolvido para veículos utilitários e pick-ups.",
        oem: "48610-60030",
        similar: "SC-2944, 37146",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_906374-MLB46220155221_062021-O.webp",
        categoryId: "cat_direcao",
        category: MOCK_CATEGORIES[0],
        applications: [
            { id: "app_9", maker: "TOYOTA", model: "HILUX", yearStart: 2005, yearEnd: 2015, engine: "2.5/3.0", notes: "4x4" },
        ]
    },
    {
        id: "prod_6",
        code: "YKM-2209",
        name: "Braço Oscilante (Bandeja) Superior",
        description: "Braço de suspensão injetado em liga leve de alta resistência. Buchas de poliuretano industrial.",
        oem: "51450-SDA-A01",
        similar: "N-3051, BDJ-4011",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_712201-MLB44220155452_122020-O.webp",
        categoryId: "cat_suspensao",
        category: MOCK_CATEGORIES[1],
        applications: [
            { id: "app_10", maker: "HONDA", model: "ACCORD", yearStart: 2003, yearEnd: 2007, engine: "2.4/3.0", notes: "" },
        ]
    },
    {
        id: "prod_7",
        code: "YKM-9933",
        name: "Bobina de Ignição de Alta Performance",
        description: "Garante centelha estável para queima eficiente de combustível. Resistência superior a altas temperaturas.",
        oem: "06E-905-115-E",
        similar: "U5014, BI0044MM",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_812201-MLB43220155452_092020-O.webp",
        categoryId: "cat_eletrica",
        category: MOCK_CATEGORIES[3],
        applications: [
            { id: "app_11", maker: "AUDI", model: "A3", yearStart: 2006, yearEnd: 2016, engine: "2.0 TSI", notes: "" },
            { id: "app_12", maker: "VOLKSWAGEN", model: "JETTA", yearStart: 2011, yearEnd: 2017, engine: "2.0 TSI", notes: "211cv / 200cv" },
        ]
    },
    {
        id: "prod_8",
        code: "YKM-5501",
        name: "Bomba de Direção Hidráulica",
        description: "Operação silenciosa e fluxo constante de fluído. Testada em baco de prova sob carga máxima.",
        oem: "7613.955.147",
        similar: "BH-1100, 28445",
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_912201-MLB42220155452_072020-O.webp",
        categoryId: "cat_direcao",
        category: MOCK_CATEGORIES[0],
        applications: [
            { id: "app_13", maker: "MERCEDES", model: "SPRINTER", yearStart: 1997, yearEnd: 2012, engine: "311/313/413", notes: "Motor CDI" },
        ]
    }
];
