import React from "react";
import Banner from "./Banner";
import { client } from "../lib/client";

type Props = {
  bannerData: any;
};

const HeroCarousel: React.FC = () => {
  return (
    <>
      {/* <img
        src="https://images.unsplash.com/photo-1660576333106-ca39ad891f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80"
        alt="hero"
        className="aspect-[4/3] rounded-3xl"
      /> */}
    </>
  );
};

export const getServersideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};

export default HeroCarousel;
