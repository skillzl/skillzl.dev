import React from 'react';
import Head from 'next/head';

import "../styles/index.scss";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>skillzl</title>
        <meta name="description" content="18 yo, self-thought programmer" />
        <meta name="author" content="skillzl/index" />
        <meta name="robots" content="index, follow" />
        <meta name="og:theme-color" content="#0f2233" />
        <meta property="og:image" content="https://i.imgur.com/zJFoAWO.png" />

        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
