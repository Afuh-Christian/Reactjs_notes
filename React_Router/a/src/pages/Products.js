import { Link,NavLink } from "react-router-dom";
import products from "../data";
const Products = () => {
  return (
    <section className="section">
      <h2>products</h2>
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <NavLink  to={`/products/${product.id}`}>more info</NavLink>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;