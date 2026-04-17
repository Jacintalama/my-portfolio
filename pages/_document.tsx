import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="font-primary antialiased">
        <Main />
        <NextScript />
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </Html>
  );
}
