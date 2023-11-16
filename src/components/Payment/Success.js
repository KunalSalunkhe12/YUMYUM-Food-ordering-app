import { useEffect, useContext } from "react";
import { Link } from "react-router-dom"
import { CartContext } from "../../../utils/context/cart/CartContext";
import successIcon from "../../../assets/success.png"

const Success = () => {
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <img src={successIcon} />
      <div className="text-center">
        <h2 className="text-4xl font-bold">Success!</h2>
        <p className="text-lg mt-4">Your Payment has been done</p>
      </div>
      <Link to="/">
        <button className="bg-primary text-secondary px-4 py-2 rounded-md font-medium mt-6">Home</button>
      </Link>
    </div>
  )

};

export default Success;
