import { CartProvider } from "../../utils/context/CartContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
    return (
        <CartProvider>
            <Header />
            <Outlet />
            <Toaster
                toastOptions={{
                    style: {
                        background: "#fefefe",
                    },
                }}
            />
        </CartProvider>
    )
}

export default RootLayout; 