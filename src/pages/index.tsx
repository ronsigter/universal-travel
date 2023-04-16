import { type NextPage } from "next";
import Head from "next/head";
import { Legend, Planet } from "~/components";
import { useScreenshot } from "~/contexts";
import { PLANETS } from "~/helpers";

const Home: NextPage = () => {
  const { setComponentRef } = useScreenshot();

  return (
    <>
      <Head>
        <title>Solar Traveller</title>
        <meta name="description" content="Just a meme site for travellers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="h-screen bg-gradient-to-b from-[#151317] to-[#15162c]"
        ref={setComponentRef}
      >
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
