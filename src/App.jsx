import { Routes, Route } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Cart from "./pages/Cart";
import FullProduct from "./pages/FullProduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="product/:id" element={<FullProduct />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
