import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./components/RootLayout";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import About from "./components/About";
import Help from "./components/Help";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import Success from "./components/Payment/Success.js";
import Cancel from "./components/Payment/Cancel.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy } from "react";
const Search = lazy(() => import("./components/Search.js"))


const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RootLayout />
        ),
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <RestaurantList />
            },
            {
                path: "auth",
                element: <Auth />
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
            },
            {
                path: "success",
                element: <Success />
            },
            {
                path: "cancel",
                element: <Cancel />
            }

        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)