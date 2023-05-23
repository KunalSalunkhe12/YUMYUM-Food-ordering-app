import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./components/RestaurantList";
import RestaurantMenu from "./components/RestaurantMenu";
import Error from "./components/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
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
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />)