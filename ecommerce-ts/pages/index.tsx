import type { NextPage } from "next";
import { Hero } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Hero />
      </div>
    </>
  );
};

export default Home;
