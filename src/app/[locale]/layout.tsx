import type { Metadata } from "next";
import { Inter, Roboto_Mono, Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const descriptions: Record<string, string> = {
    'pt-BR': 'Yokomitsu Brasil - Autopeças de suspensão e direção com qualidade global. Operada pela IPS do Brasil.',
    'en': 'Yokomitsu Brazil - Global quality suspension and steering auto parts. Operated by IPS do Brasil.',
    'es': 'Yokomitsu Brasil - Autopartes de suspensión y dirección con calidad global. Operada por IPS do Brasil.'
  };

  return {
    title: {
      template: '%s | Yokomitsu',
      default: 'Yokomitsu | Sua direção, seu caminho, seu controle',
    },
    description: descriptions[locale] || descriptions['pt-BR'],
    keywords: ['Yokomitsu', 'autopeças', 'suspensão', 'direção', 'IPS do Brasil', 'peças automotivas'],
    openGraph: {
      title: 'Yokomitsu Brasil',
      description: descriptions[locale] || descriptions['pt-BR'],
      url: 'https://yokomitsu.com.br',
      siteName: 'Yokomitsu',
      locale: locale,
      type: 'website',
    },
  };
}

import CustomCursor from "@/components/ui/CustomCursor";

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${robotoMono.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <CustomCursor />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
