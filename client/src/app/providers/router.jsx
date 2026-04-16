import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { MainPage } from "../../pages/main";
import { ProductListPage } from "../../pages/product-list";
import { ProductDetailPage } from "../../pages/product-detail";
import { CartPage } from "../../pages/cart";
import { CheckoutPage } from "../../pages/checkout";
import { LoginPage } from "../../pages/login";
import { SignupPage } from "../../pages/signup";
import { MyPage } from "../../pages/my-page";
import { AdminPage } from "../../pages/admin";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/products", element: <ProductListPage /> },
      { path: "/products/:id", element: <ProductDetailPage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/checkout", element: <CheckoutPage /> },
      { path: "/my-page", element: <MyPage /> },
      { path: "/admin", element: <AdminPage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <SignupPage /> },
]);
