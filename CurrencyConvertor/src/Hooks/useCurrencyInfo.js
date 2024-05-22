/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'

function useCurrencyInfo(currency) {
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`

    const [data, setData] = useState({})
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((apidata) => {
                setData(apidata[currency])
            })
            .catch((error) => {
                console.log("This is A error", error);
            })
    }, [currency])
    console.log(data);

    return data;
}

export default useCurrencyInfo;
