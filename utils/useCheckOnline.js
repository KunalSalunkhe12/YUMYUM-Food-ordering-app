import React, { useEffect, useState } from "react";

const useCheckOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    const handleOnline = () => {
        console.log("is online")
        setIsOnline(true)
    }
    const handleOffline = () => {
        console.log("is offline")
        setIsOnline(false)
    }

    useEffect(() => {
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])

    return isOnline;
}

export default useCheckOnline;