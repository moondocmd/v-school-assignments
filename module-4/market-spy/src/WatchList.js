import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import StockList from "./StockList";

function WatchList() {

    const [stocks, setStocks] = useState([]);
    const [input, setInput] = useState('');
    const [showError, setError] = useState(false);

    useEffect(() => {
        const data = localStorage.getItem('my-stock-list');
        if (data) {
            setStocks(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('my-stock-list', JSON.stringify(stocks));
    })

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        // addStock({
        //     id: Math.floor(Math.random() * 10000),
        //     text: input
        // });
        addStock();
        setInput('');
    };

    const addStock = () => {
        //   if (!todo.text || /^\s*$/.test(todo.text)) {
        //     return;
        //   }
        try {
            axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${input}&apikey=M90JRSDK1T2INSLW`).then(response => {
                const stock = response.data['Global Quote'];
                console.log(stock);
                //setCurrent(stock['05. price']); 
                if (stock['01. symbol']) {
                    stock.id = Math.floor(Math.random() * 10000);
                    const newStocks = [stock, ...stocks];

                    setStocks(newStocks);
                    console.log(...stocks);
                    setError(false);
                } else setError(true);
            })

        } catch (error) {
            console.log(error)
        }

    };

    // Update
    const removeStock = id => {
        const removedArr = [...stocks].filter(stock => stock.id !== id);

        setStocks(removedArr);
    };

    return (
        <>
        <div className="ui form error">
            <div className="field">Enter stock symbol below to add to your watchlist</div>
            <input
                placeholder='Enter stock symbol here'
                value={input}
                onChange={handleChange}
                name='text'
                className='stock-input'
            />
            {/* <button onClick={handleSubmit} className='todo-button'> */}
            <div className="ui error message">
                {showError && <p>Invalid symbol, please enter a valid symbol (e.g. AAPL)</p>}
            </div>
            <div onClick={handleSubmit} className="ui submit button">
                Add Stock
                </div>
          {/* </button> */}
          </div>
            <StockList
                stocks={stocks}
                removeStock={removeStock}
            />
        </>
    )
}

export default WatchList