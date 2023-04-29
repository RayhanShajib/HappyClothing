import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card";
import { CategoriesContext } from "../../contexts/categories.context";
import ClipLoader from "react-spinners/ClipLoader";
import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
        <div className="category-container">
        {loading ? (
        <ClipLoader
          color={"#000000"}
       
          loading={loading}
          size={50}
          className="spinner"
        />
      ) : (
        products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
      )}
      
   </div>
    </Fragment>
  );
};

export default Category;
