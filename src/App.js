import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import CheckOut from "./routes/checkOut/checkout";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="wrapper">
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
