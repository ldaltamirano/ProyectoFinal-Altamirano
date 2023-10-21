import { useEffect, useState } from "react";

const useAsyncMock = (mock) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setData(mock);
            setLoading(false);
        }, 2000);
    }, [])

    return { data, loading };
}

export default useAsyncMock;