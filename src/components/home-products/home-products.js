import { useContext, useEffect, useState, CSSProperties } from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import HomeCategoryPreview from "../home-category-preview/home-category-preview";
import ClipLoader from "react-spinners/ClipLoader";
import "./home-products.scss";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const HomeProducts = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="home-products-wrapper">
      <div className="title">
        <h2>Recommanded For You</h2>
      </div>
      <div className="products">
        {loading ? (
          <ClipLoader
            color={"#000000"}
            cssOverride={override}
            loading={loading}
            size={50}
            className="spinner"
          />
        ) : (
          Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];
            return (
              <HomeCategoryPreview
                key={title}
                title={title}
                products={products}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default HomeProducts;
