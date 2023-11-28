import { useState, useEffect } from "react";
import { getOrders } from "../../api";

const useOrders = () => {
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const getAllOrders = async () => {
        setIsLoading(true);
        setIsError(false);

        try {
            const response = await getOrders();
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