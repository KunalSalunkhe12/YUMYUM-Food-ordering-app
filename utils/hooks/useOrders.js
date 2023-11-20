import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/user/UserContext"
import { getOrders } from "../../api";

const useOrders = () => {
    const { userState } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getAllOrders = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await getOrders(userState.user.result._id);
            setOrders(response.data.orders);
        } catch (error) {
            setIsError(true);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllOrders();
    }, []);

    return { orders, isLoading, isError };
}

export default useOrders;