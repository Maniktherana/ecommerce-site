import React from "react";
import Banner from "./Banner";
import { urlFor } from "../lib/client";

interface Props {
  heroBanner: any;
}

const HeroCarousel: React.FC<Props> = (props) => {
  const { heroBanner } = props;
  const product = heroBanner[1];
  return (
    <div className="
      aspect-[4/3] relative max-w-[80%] min-w-[50%]
      rounded-b-[11%] xl:rounded-r-[11%] 
      bg-gradient-to-b 
      xl:bg-gradient-to-r from-[#ffffff] via-[#56acf3] to-[#0688f3]"
    >
      <img
        src={urlFor(product.image).url()}
        alt={product.product}
        className="relative"
      />

      {/* {heroBanner.map((banner: any) => (
        <div key={banner._id}>
          {banner.product}, {banner._id}
        </div>
      ))} */}
    </div>
  );
};

export default HeroCarousel;

// <img
//   src="https://images.unsplash.com/photo-1660576333106-ca39ad891f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80"
//   alt="hero"
//   className="aspect-[4/3] rounded-3xl"
// />;


