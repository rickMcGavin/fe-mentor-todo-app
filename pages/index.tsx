import Head from "next/head";
import Header from "../src/components/atoms/Header";
import Hero from "../src/components/atoms/Hero";
export default function Home() {
  return (
    <div className="app">
      <Head>
        <title></title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Hero />
        <Header />
      </main>
    </div>
  );
}
