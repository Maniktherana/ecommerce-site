import React from "react";

type Props = {
  heroBanner: any;
};

const Banner: React.FC<Props> = ({ heroBanner }) => {
  return (
    <div>
      <div>
        {heroBanner &&
          heroBanner.map((banner: any) => (
            <div key={banner._id}>
              <h1>{banner.title}</h1>
              <p>{banner.description}</p>
              <img src={banner.image} alt={banner.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Banner;
