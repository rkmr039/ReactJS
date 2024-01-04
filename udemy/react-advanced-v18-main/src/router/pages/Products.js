import { Link } from "react-router-dom";
import products from "../data";

const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product) => {
          const { id, name } = product;
          return (
            <article key={id}>
              <h5 className="product-name">{name}</h5>
              <Link to={`/products/${id}`}>more info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;