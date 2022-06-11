import Head from "next/head";
import { Hero } from "../src/components/atoms/Hero/styles";
import { Layout } from "../src/components/templates/Layout/styles";
import Nav from "../src/components/molecules/Nav";
import TodoInput from "../src/components/atoms/TodoInput";

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
            <Nav />
            <TodoInput />
          </Layout>
        </Hero>
      </main>
    </div>
  );
}
