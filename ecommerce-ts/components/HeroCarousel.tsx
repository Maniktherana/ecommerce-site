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
    <div className="aspect-[4/3] relative rounded-[11%] max-w-[80%] min-w-[50%] bg-gradient-to-tl from-[#828282] via-[#c2c0c0] to-[#e6e3e3]">
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
