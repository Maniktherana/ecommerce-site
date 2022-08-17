import type { NextPage } from "next";
import { client } from "../lib/client";
import { Hero } from "../components";

type Props = {
  products: any;
  bannerData: any;
};

const Home: NextPage<Props> = ({ products, bannerData }) => {
  return (
    <>
      {console.log(bannerData)}
      <div className="flex justify-center items-center">
        <Hero />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  if (!products && !bannerData) return { props: null, notFound: true };
  else
    return {
      props: { products, bannerData },
    };
};

export default Home;
