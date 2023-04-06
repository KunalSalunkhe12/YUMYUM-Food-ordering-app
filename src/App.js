import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantList from "./components/RestaurantList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";


/*
Header
    Logo
    Nav items
    Cart
Body
    RestaurantList
        RestaurantCard
            Img
            Name
            Rating
Footer
    Copyright
*/

const AppLayout = () => {
    return (
        <>
            <Header />
            <RestaurantList />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)