import ProductCard from "../product-card/product-card";
import './home-category-preview.scss'

const HomeCategoryPreview = ({ products }) => {
  return (
    <div className="home-category-preview-container">
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

export default HomeCategoryPreview;
