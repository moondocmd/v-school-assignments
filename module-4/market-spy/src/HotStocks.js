import React, { useState, useEffect } from "react";
import axios from "axios";


function HotStocks() {

    const [hotStocks, setStocks] = useState([]);

    useEffect(() => {
        try {
            axios.get(`https://financialmodelingprep.com/api/v3/stock/actives?apikey=df22a09cda3752489e8f8ab7ca16f7f2`).then(response => {
                setStocks(response.data.mostActiveStock);
            })
        } catch (error) { console.log(error) }
    }, []);

    return (
        <div>
            <table className="ui unstackable table">
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
                    <tbody key={idx}>
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