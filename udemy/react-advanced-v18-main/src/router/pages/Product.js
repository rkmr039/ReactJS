import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import products from "../data";

export const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { name, image } = product;

  useEffect(() => {
    console.log(productId);
    const temp = products.find((product) => product.id === productId);
    setProduct(temp);
  }, []);

  return (
    <section className="section">
      <h4>{name}</h4>
      <img src={image} alt={name} />
      <Link to="/products">Products</Link>
    </section>
  );
};
