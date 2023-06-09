import { type NextPage } from "next";
import Head from "next/head";
import { Legend, Planet, SEO, ShamelessPlug } from "~/components";
import { useScreenshot } from "~/contexts";
import { PLANETS } from "~/helpers";

const Home: NextPage = () => {
  const { setComponentRef } = useScreenshot();

  return (
    <>
      <SEO />
      <Head>
        <title>Universal Traveller</title>
        <meta name="description" content="Travel page for astronauts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="h-screen bg-gradient-to-b from-[#151317] to-[#15162c]"
        ref={setComponentRef}
      >
        <ShamelessPlug />
        <div className="container m-auto flex h-full flex-col justify-center gap-4 md:flex-row">
          <div className="flex items-center justify-center py-10 md:w-[370px]">
            <Legend />
          </div>
          <div className="flex flex-1 flex-wrap items-center justify-center gap-10 overflow-y-auto p-10">
            {PLANETS.map((planet) => (
              <Planet key={planet.name} {...planet} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
