import type { NextPage } from "next";
import LineGraph from "./Components/LineGraph";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Love Island</title>
        <link rel="icon" href="/image/favicon.jpeg" />
      </Head>
      <div className="bg-gradient-to-br from-blue-400  to-violet-600 overflow-auto h-screen">
        <LineGraph />
      </div>
    </>
  );
};

export default Home;
