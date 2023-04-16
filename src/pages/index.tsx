import { type NextPage } from "next";
import Head from "next/head";
import { Legend, Planet } from "~/components";
import { PLANETS } from "~/helpers";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Solar Traveller</title>
        <meta name="description" content="Just a meme site for travellers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#151317] to-[#15162c]">
        <div>
          <Legend />
        </div>
        <div className="flex flex-wrap items-center gap-10">
          {PLANETS.map((planet) => (
            <Planet key={planet.name} {...planet} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
