import {
  Fragment,
  useContext,
  useEffect,
  useState,
  CSSProperties,
} from "react";
import CategoryPreview from "../../components/category-preview/category-preview";
import { CategoriesContext } from "../../contexts/categories.context";
import ClipLoader from "react-spinners/ClipLoader";
import "./categories-preview.scss";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Fragment>
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
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}
    </Fragment>
  );
};
export default CategoriesPreview;
