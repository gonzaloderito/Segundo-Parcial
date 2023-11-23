import '@/styles/globals.css';
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "next-themes";
import global_en from "@/languages/en/global.json";
import global_es from "@/languages/es/global.json";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Head from "next/head";


i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    es: {
      global: global_es,
    },
  },
});

export default function App({ Component, pageProps, router }) {
  useEffect(() => {
    const language = localStorage.getItem("language");
    i18next.changeLanguage(language);
  }, []);

  return (
    <ThemeProvider
    attribute="class"
    enableSystem={true}
    defaultTheme="system"
  >
    <I18nextProvider i18n={i18next}>
      <div className="noise bg-noise"></div>
      <AnimatePresence mode="wait">
        <Head>
          <title>Gonzalo De Rito</title>
          <meta
            name="description"
            content="Gonzalo de Rito personal website"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1"
          />
          <link rel="icon" href="/io.ico" />
        </Head>

        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </I18nextProvider>
  </ThemeProvider>
  );
}
