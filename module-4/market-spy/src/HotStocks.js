import React, { useState, useEffect } from "react";
import axios from "axios";


function HotStocks() {

    const [hotStocks, setStocks] = useState([]);

    useEffect(() => {
        // Update the document title using the browser API
        try {
            axios.get(`https://financialmodelingprep.com/api/v3/stock/actives?apikey=df22a09cda3752489e8f8ab7ca16f7f2`).then(response => {
                const stocks = response.data;
                console.log(stocks.mostActiveStock);
                setStocks(stocks.mostActiveStock);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div>
            <table class="ui compact table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change %</th>
                        <th>Company Name</th>
                    </tr>
                </thead>

                {hotStocks.map((stock, idx) =>
                    <tbody>
                        <td key={idx}>{stock.ticker}</td>
                        <td>{stock.price}</td>
                        <td>{stock.changes}</td>
                        <td>{stock.changesPercentage}</td>
                        <td>{stock.companyName}</td>
                    </tbody>
                )}
            </table>
        </div >
    )
}

export default HotStocks