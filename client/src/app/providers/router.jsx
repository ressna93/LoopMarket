import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../../pages/main";
import { ProductListPage } from "../../pages/product-list";
import { ProductDetailPage } from "../../pages/product-detail";
import { CartPage } from "../../pages/cart";
import { LoginPage } from "../../pages/login";
import { SignupPage } from "../../pages/signup";
import { MyPage } from "../../pages/my-page";
import { AdminPage } from "../../pages/admin";
import { CheckoutPage } from "../../pages/checkout";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/products", element: <ProductListPage /> },
  { path: "/products/:id", element: <ProductDetailPage /> },
  { path: "/cart", element: <CartPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/my-page", element: <MyPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "/admin", element: <AdminPage /> },
]);
