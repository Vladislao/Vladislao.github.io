import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/img/icon64.png"
          type="image/png"
          sizes="64x64"
        />
        <link
          rel="apple-touch-icon"
          href="/img/apple-icon.png"
          type="image/png"
          sizes="198x198"
        />
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="any"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
