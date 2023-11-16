import { Link } from "react-router-dom"
import cancelIcon from "../../../assets/cancel.png"
const Cancel = () => {

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <img src={cancelIcon} />
            <div className="text-center">
                <h2 className="text-4xl font-bold">Cancel!</h2>
                <p className="text-lg mt-4">Your Payment has been cancelled</p>
            </div>
            <Link to="/cart">
                <button className="bg-primary text-secondary px-4 py-2 rounded-md font-medium mt-6">Home</button>
            </Link>
        </div>
    )

};

export default Cancel;
