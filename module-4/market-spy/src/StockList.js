import React, { useState } from 'react';

const StockList = ({ stocks, removeStock }) => {

    console.log("STOCKS = ", stocks)

    return (
        <div>
            <table className="ui unstackable table">
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Change</th>
                        <th>Change %</th>
                        <th>Volume</th>
                    </tr>
                </thead>

                {stocks.map((stock, idx) =>
                    <tbody key={idx}>
                        <td key={idx}>{stock['01. symbol']}</td>
                        <td>{Number(stock['05. price']).toLocaleString('en-EN', { style: 'currency', currency: 'USD' })}</td>
                        <td>{stock['09. change']}</td>
                        <td>{stock['10. change percent']}</td>
                        <td>{Number(stock['06. volume']).toLocaleString('en')}</td>
                    </tbody>
                )}
            </table>
        </div >
    )
}

export default StockList;