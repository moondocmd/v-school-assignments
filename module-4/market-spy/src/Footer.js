import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function Footer() {
    const [indices, setIndices] = useState([]);

    useEffect(() => {
        try {
            axios.get(`https://financialmodelingprep.com/api/v3/quotes/index?apikey=df22a09cda3752489e8f8ab7ca16f7f2`).then(response => {
                // console.log(response.data)
                // let obj = foo.find(f => f.bar == 1);
                // if (obj)
                //     obj.baz = [2, 3, 4];
                // console.log(foo);

                const result = [];
                const sym = ["^DJI", "^IXIC", "^VVIX", "^GSPC"];
                const stocks = response.data;

                for (let i = 0; i < stocks.length; i++) {
                    if (sym.includes(stocks[i].symbol)) result.push(stocks[i])
                }

                console.log("result ", result);
                setIndices(result);
            })
        } catch (error) {
            console.log(error)
        }
    }, []);

    return (
        <div className="wrapper">
            {indices.map((stock, idx) =>
                <div key={idx}>{stock.name.substring(0, 10)} 
                : ${Number(stock.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                <span>  </span>Change: {stock.changesPercentage}% </div>
            )}
        </div>
    )
}

export default Footer