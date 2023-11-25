import { Link } from "react-router-dom"
import cancelIcon from "../../../assets/cancel.png"
import toast from "react-hot-toast"

const Cancel = () => {

    toast.error("Payment Cancelled")

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <img src={cancelIcon} />
            <div className="text-center">
                <h2 className="text-4xl font-bold">Cancel!</h2>
                <p className="text-lg mt-4">Your Payment has been cancelled</p>
            </div>
            <Link to="/cart">
                <button className="btn_primary mt-6">Home</button>
            </Link>
        </div>
    )

};

export default Cancel;
