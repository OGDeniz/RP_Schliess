import Navigation from "@/komponenten/Navigation";
import Fusszeile from "@/komponenten/FussZeile";
import Head from "next/head";


export default function Layout({children} ) {
  return (
    <div>
      <Head>
        <title>Liefermax - Dein Lieferservice</title>
        <meta name="description" content="Liefermax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />

          {children}

      <Fusszeile/>
    </div>
  );
}
