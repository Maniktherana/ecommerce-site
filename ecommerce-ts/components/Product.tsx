import React from "react";
import Link from "next/link";

type Product = {
  product: any;
};

const Product: React.FC<Product> = ({ product }) => {
  console.log(`name is ${product[0].name}`);
  return (
    <div>
      <Link href={`/product/${product[0].slug.current}`}>
        {product[0].name}
      </Link>
    </div>
  );
};

export default Product;
