import { Routes, Route } from "react-router-dom";
import MasterLayout from "./pages/users/theme/masterLayout";
import AdminLayout from "./pages/admin/Components/AdminLayout";
import Homepage from "./pages/users/homepage";
import Catalog from "./pages/users/Catalog";
import LoginSignup from "./pages/users/LoginAndSignup/LoginSignup";
import BookDetail from "./pages/users/BookDetail/BookDetail";
import AboutUs from "./pages/users/AboutUs/AboutUs";
import NotFound from "./pages/NotFound/NotFound";
import ShoppingCart from "./pages/users/ShoppingCart/ShoppingCart";
import Products from "./pages/admin/Products";
import AddBook from "./pages/admin/Products/Addproducts";
import { ROUTERS } from "./ultils/router";
import EditBook from "./pages/admin/Products/Editbook";

// định nghĩa danh sách routes
const userRoutes = [
  { path: ROUTERS.USER.HOME, component: <Homepage /> },
  { path: ROUTERS.USER.CATALOG, component: <Catalog /> },
  { path: ROUTERS.USER.TESTDETAIL, component: <BookDetail /> },
  { path: ROUTERS.USER.ABOUTUS, component: <AboutUs /> },
  { path: ROUTERS.USER.CART, component: <ShoppingCart /> },
  { path: ROUTERS.USER.ERROR, component: <NotFound /> },
];

const adminRoutes = [
  { path: ROUTERS.ADMIN.PRODUCTS, component: <Products /> },
  {path:ROUTERS.ADMIN.ADDBOOK, component:<AddBook/>},
  {path:ROUTERS.ADMIN.EDITBOOK, component:<EditBook/>}
 
];

const RouterCustom = () => {
  return (
    <Routes>
      {/* User Routes */}
      <Route path={ROUTERS.USER.LOGIN} element={<LoginSignup />} />
      <Route
        path="*"
        element={
          <MasterLayout>
            <Routes>
              {userRoutes.map((route, index) => (
                <Route key={index} path={route.path} element={route.component} />
              ))}
            </Routes>
          </MasterLayout>
        }
      />

      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminLayout />}>
        {adminRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  );
};

export default RouterCustom;

