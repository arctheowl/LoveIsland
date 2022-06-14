import type { NextPage } from "next";
import Head from "next/head";
import FrontPage from "./FrontPage";
import { useState, useEffect } from "react";
import ReactGA from "react-ga";

const Home: NextPage = () => {
  const [theme, setTheme] = useState("dark");
  useEffect(() => {
    ReactGA.initialize("G-5J79YQTF7X", {
      debug: true,
      titleCase: false,
      gaOptions: {
        name: "Tracker1",
        siteSpeedSampleRate: 100
      },
    });
    ReactGA.set
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

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
