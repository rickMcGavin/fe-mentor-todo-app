import Head from "next/head";
import { Hero } from "../src/components/atoms/Hero/styles";
import { Layout } from "../src/components/templates/Layout/styles";
import Nav from "../src/components/molecules/Nav";
import TodoApp from "../src/components/organisms/TodoApp";

export default function Home() {
  return (
    <div className="app">
      <Head>
        <title>todo</title>
        <meta name="description" content="" />
      </Head>

      <main>
        <Hero>
          <Layout>
            <Nav />
            <TodoApp />
          </Layout>
        </Hero>
      </main>
    </div>
  );
}
