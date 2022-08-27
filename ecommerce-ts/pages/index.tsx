import type { NextPage } from "next";
import { client } from "../lib/client";
import { Hero, Product } from "../components";

interface ProductData {
  products: any;
  bannerData: any;
}

const Home: NextPage<ProductData> = (props) => {
  const { products, bannerData } = props;
  return (
    <>
      <div className="flex justify-center items-center">
        <Hero heroBanner={bannerData} />
        {/* <Product product={products} /> */}
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
