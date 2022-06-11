import Head from "next/head";
import Header from "../src/components/atoms/Header";
import { Hero } from "../src/components/atoms/Hero/styles";
import { Layout } from "../src/components/templates/Layout/styles";
import ThemeToggle from "../src/components/atoms/ThemeToggle";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>TODO</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Hero>
          <Layout>
            <Header />
            <ThemeToggle />
          </Layout>
        </Hero>
      </main>
    </div>
  );
}
