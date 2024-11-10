import Navigation from "@/komponenten/Navigation";
import FussZeile from "@/komponenten/FussZeile";
import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";


export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Liefermax - Dein Lieferservice</title>
        <meta name="description" content="Liefermax" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {children}
      <FussZeile />
    </div>
  );
}
