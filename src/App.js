import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import RootLayout from "./components/RootLayout";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import About from "./components/About";
import Help from "./components/Help";
import MyProfile from "./components/MyProfile";
import Cart from "./components/Cart";
import Auth from "./components/Auth";
import Success from "./components/Payment/Success.js";
import Cancel from "./components/Payment/Cancel.js";
import ProfileLayout from "./components/Profile/ProfileLayout.js";
import Info from "./components/Profile/Info.js";
import Orders from "./components/Profile/Orders.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy } from "react";
import PrivateRoute from "../utils/PrivateRoute/PrivateRoute.js";
const Search = lazy(() => import("./components/Search.js"))


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
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
                        path: "my-profile",
                        element: <MyProfile />,
                    }
                ]
            },
            {
                path: "help",
                element: <Help />,
            },
            {
                path: "cart",
                element: (
                    <PrivateRoute>
                        <Cart />
                    </PrivateRoute>)
            },
            {
                path: "profile",
                element: (
                    <PrivateRoute>
                        <ProfileLayout />
                    </PrivateRoute>
                ),
                children: [
                    {
                        index: true,
                        element: <Info />
                    },
                    {
                        path: "orders",
                        element: <Orders />
                    }
                ]

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