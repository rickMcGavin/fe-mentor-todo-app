import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
