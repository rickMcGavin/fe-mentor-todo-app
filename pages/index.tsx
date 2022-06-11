import Head from "next/head";
import Header from "../src/components/atoms/Header";
export default function Home() {
  return (
    <div className="app">
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  );
}
