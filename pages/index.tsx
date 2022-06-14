import type { NextPage } from "next";
import Head from "next/head";
import FrontPage from "./FrontPage";
import { useState, useEffect } from "react";


const Home: NextPage = () => {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Head>
        <title>Love Island</title>
        <link rel="icon" href="/image/favicon.jpeg" />
      </Head>
      {theme === "light" ? (
        <>
          <div className="bg-gradient-to-br from-blue-400  to-violet-600 overflow-auto h-screen">
            <FrontPage theme={theme} setTheme={setTheme} />
          </div>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-br from-blue-600  to-violet-900 overflow-auto h-screen">
            <FrontPage theme={theme} setTheme={setTheme} />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
