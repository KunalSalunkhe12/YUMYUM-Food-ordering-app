import { useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../../utils/context/cart/CartContext";
import successIcon from "../../../assets/success.png"
import toast from "react-hot-toast";

const Success = () => {
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
    toast.success("Payment Successful")
  }, [])

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src={successIcon} />
      <div className="text-center">
        <h2 className="text-4xl font-bold">Success!</h2>
        <p className="text-lg mt-4">Your Payment has been done</p>
      </div>
      <div className="flex gap-4">
        <Link to="/">
          <button className="btn_primary mt-6">Home</button>
        </Link>
        <Link to="/profile/orders">
          <button className="btn_primary mt-6">Orders</button>
        </Link>
      </div>
    </div>
  )

};

export default Success;
