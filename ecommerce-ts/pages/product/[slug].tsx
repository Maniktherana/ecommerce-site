import React, { useState } from "react";
import { client, urlFor } from "../../lib/client";
import { GetStaticProps } from 'next'

interface ProductData {
  products: any;
  product: any;
}

const ProductPage: React.FC<ProductData> = ({ product, products }) => {
  const { image, name, price, details } = product;
  const [index, setIndex] = useState(0);
  
  return ( 
    <div>
      <img
          src={urlFor(image && image[index]).url()}
          className="product-detail-image"
      />
    </div>)
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

    const products = await client.fetch(query);

    const paths = products.map((product: { slug: { current: any; }; }) => ({
      params: {
        slug: product.slug.current,
      },
    }));
  
    return {
      paths,
      fallback: "blocking",
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "product" && slug.current == '${params!.slug}'][0]`;
    const productsQuery = '*[_type == "product"]';
  
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    console.log(product);
  
    return {
      props: { products, product },
    };
  };

export default ProductPage;
function useStateContext(): { decQty: any; incQty: any; qty: any; onAdd: any; } {
  throw new Error("Function not implemented.");
}

