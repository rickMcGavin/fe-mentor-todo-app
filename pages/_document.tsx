import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  // Reference for theme persistence
  // https://electricanimals.com/articles/next-js-dark-mode-toggle
  const setInitialTheme = `
    function getUserPreference() {
      if(window.localStorage.getItem('theme')) {
        return window.localStorage.getItem('theme')
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light'
    }
    document.body.dataset.theme = getUserPreference();
  `;
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
