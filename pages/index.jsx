import React, { useState, useContext, useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import PokemonList from "containers/PokemonList";
import SearchBar from "containers/SearchBar";

export default function Home() {

  useEffect(() => {
    localStorage.getItem('fav_list') === null && localStorage.setItem('fav_list', JSON.stringify([{}]));
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Poke Bawl</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="flex flex-row w-full items-center bg-white p-4 rounded-full">
          <SearchBar />
        </div>
          {/* <PokemonList /> */}
        <div className="mt-4 grid grid-cols-4 gap-4">
          <PokemonList />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Développé avec amour par Richine.
        </a>
      </footer>
    </div>
  )
}
