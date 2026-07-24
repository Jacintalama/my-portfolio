import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Mark JS as available before first paint so scroll-reveal styles only
            arm when they can actually fire (content stays visible without JS). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <meta
          name="google-site-verification"
          content="6kb8nQZgMrOo_-nxc6-K6hzXVhXtAwjDP_zFWo8MHMA"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </Head>
      <body className="font-primary antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
