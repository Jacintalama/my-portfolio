import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="6kb8nQZgMrOo_-nxc6-K6hzXVhXtAwjDP_zFWo8MHMA"
        />
      </Head>
      <body className="font-primary antialiased">
        <Main />
        <NextScript />
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </Html>
  );
}
