import { useState, useEffect } from "react";

/**
 * Function to call the API to get data
 * @Creator Martin Kruger
 * @param url needs a url for the endpoint of the API-call
 * @Return Returning data, loading and error.
 */


const ApiHook = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getData() {
            try {
                setIsLoading(true);
                setIsError(false);
                const fetchedData = await fetch(url);
                const json = await fetchedData.json();

                if (fetchedData.ok) {
                    setData(json);
                } else {
                    console.log(json.errors);
                    throw new Error();
                }
            } catch (error) {
                console.log(error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getData();
    }, [url]);
    return { data, isLoading, isError };
};

export default ApiHook;