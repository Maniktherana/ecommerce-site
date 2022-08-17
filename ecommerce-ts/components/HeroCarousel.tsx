import React from "react";
import Banner from "./Banner";

interface Props {
  heroBanner: any;
}

const HeroCarousel: React.FC<Props> = (props) => {
  const { heroBanner } = props;
  return (
    <div>
      {heroBanner.map((banner: any) => (
        <div key={banner.slug}>{banner.product}</div>
      ))}
    </div>
  );
};

export default HeroCarousel;

<img
  src="https://images.unsplash.com/photo-1660576333106-ca39ad891f31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1786&q=80"
  alt="hero"
  className="aspect-[4/3] rounded-3xl"
/>;
