import { Link } from "react-router-dom";
import ProductCard from "../product-card/product-card";
import "./category-preview.scss";

const CategoryPreview = ({ title, products }) => {
  const arrow = ">>"
  return (
    <div className="category-preview-container">
      <div className="category-preview-title">
        <h2 className="title">{title.toUpperCase()}</h2>
        <Link className="view-all-btn" to={title}>more {arrow}</Link>
      </div>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
