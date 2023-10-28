import { CartProvider } from "../../utils/context/cart/CartContext";
import { UserProvider } from "../../utils/context/user/UserContext";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
    return (
        <UserProvider>
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
        </UserProvider>
    )
}

export default RootLayout; 