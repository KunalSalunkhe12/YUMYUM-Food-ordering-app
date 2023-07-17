import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Header from "./components/Header";
import About from "./components/About";
import Help from "./components/Help";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import { CartProvider } from "../utils/context/CartContext";
import { createBrowserRouter, RouterProvider, Outlet, redirect } from "react-router-dom";
import { lazy } from "react";
const Search = lazy(() => import("./components/Search.js"))

const AppLayout = () => {
    return (
        <CartProvider>
            <Header />
            <Outlet />
        </CartProvider>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <AppLayout />
        ),
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <RestaurantList />
            },
            {
                path: "restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: "search",
                element: (
                    <Suspense>
                        <Search />
                    </Suspense>
                )
            },
            {
                path: "about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />,
                    }
                ]
            },
            {
                path: "help",
                element: <Help />,
            },
            {
                path: "cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)