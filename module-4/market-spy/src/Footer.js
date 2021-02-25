import React, { useState, useEffect } from "react";
import axios from "axios";

function Footer() {
    const [indices, setIndices] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        try {
            axios.get(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=df22a09cda3752489e8f8ab7ca16f7f2`).then(response => {
                // console.log(response.data)
                const stocks = response.data;
                console.log(stocks);
                setIndices(stocks);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <h1>Footer</h1>
    )
}

export default Footer