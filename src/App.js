import {  createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import './style.css'
import { productData } from "./api/Api";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

const Layout = () => {
  return(
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: productData
      },
      {
        path: "/product/:id",
        element: <Product/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  }
])

function App() {
  return (
    <div>
    <RouterProvider router={router}></RouterProvider>
    </div>
  
  );
}

export default App;
