import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Header from "./components/Header";
import About from "./components/About";
import Help from "./components/Help";
import Profile from "./components/Profile";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
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
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/help",
                element: <Help />,
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)