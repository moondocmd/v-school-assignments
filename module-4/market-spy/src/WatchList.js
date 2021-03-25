import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import StockList from "./StockList";

function WatchList() {

    const [stocks, setStocks] = useState([]);
    const [input, setInput] = useState('');
    const [showError, setError] = useState(false);

    useEffect(() => {
        async function setData() {
            try {
                const data = localStorage.getItem('my-stock-list');
                if (data) {
                    setStocks(JSON.parse(data))
                }
            } catch (error) { console.log(error) }
        }
        setData();
    }, [])

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        addStock();
        setInput('');
    };

    const refreshStocks = () => {
        // console.log("stocks=: ", stocks);
        // let copyStocks = [];
        // for (let i = 0; i < stocks.length; i++) {
        //     console.log("Symbol= ", stocks[i]['01. symbol'])
        //     const sym = stocks[i]['01. symbol'];
        //     axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${sym}&apikey=M90JRSDK1T2INSLW`).then(response => {
        //         const stock = response.data['Global Quote'];
        //         if (stock['01. symbol']) {
        //             stock.id = Math.floor(Math.random() * 10000);
        //             copyStocks[i] = stock;
        //         }
        //     });
        //     // console.log("New Stocks1= ", copyStocks)
        // }

        // stocks.forEach( (stock, idx) => {
        //     console.log("Checking = ", stock)
        //     const sym = stock['01. symbol'];
        //     axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${sym}&apikey=M90JRSDK1T2INSLW`).then(response => {
        //         const res = response.data['Global Quote'];
        //         console.log("RESULT = ", res);
        //         // need to update current item only

        //         setStocks((prevState) => ([
        //             ...prevState, 
        //             {
        //                 id: prevState[idx].id,
        //                 ['01. symbol']: res['01. symbol'],
        //                 ['05. price']: res['05. price'],
        //                 ['09. change']: res['09. change'],
        //                 ['10. change percent']: res['10. change percent'],
        //                 ['06. volume']: res['06. volume']
        //             }
        //         ]))
        stocks.forEach( (stock, idx) => {
            console.log("Checking = ", stock)
            const sym = stock['01. symbol'];
            axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${sym}&apikey=M90JRSDK1T2INSLW`).then(response => {
            const res = response.data['Global Quote'];
            console.log("RESULT = ", res);
            setStocks(prevState => prevState.map((el, id) => {
                console.log("currElement", el)
                console.log("id", id)
                console.log("idx", idx)
                return id === idx ? 
                    {   ...el.id,
                        ['01. symbol']: res['01. symbol'],
                        ['05. price']: res['05. price'],
                        ['09. change']: res['09. change'],
                        ['10. change percent']: res['10. change percent'],
                        ['06. volume']: res['06. volume']
                    } : el
                }))
            })
            .catch(err => console.log(err))
        })
                // stock['05. price'] = res['03. high'];
                // stock['09. change'] = res['09. change'];
                // stock['10. change percent'] = res['10. change percent'];
                // stock['06. volume'] = res['06. volume'];
        //     });
        // })
        // console.log("Copying refreshed stocks ", copyStocks)
        checkStocks();
        // setStocks(prevState => [...prevState] );
        // setStocks(copyStocks)
    }

    const checkStocks = () => {
        console.log("Checking Stocks: ", stocks);
    }

    const addStock = () => {
        try {
            axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${input}&apikey=M90JRSDK1T2INSLW`).then(response => {
                const stock = response.data['Global Quote'];
                if (stock['01. symbol']) {
                    stock.id = Math.floor(Math.random() * 10000);
                    const newStocks = [stock, ...stocks];
                    setStocks(newStocks);
                    setError(false);
                } else setError(true);
            });
        } catch (error) {
            console.log(error)
        }

    };

    const removeStock = id => {
        const removedArr = [...stocks].filter(stock => stock.id !== id);
        setStocks(removedArr);
    };

    useEffect(() => localStorage.setItem('my-stock-list', JSON.stringify(stocks)));

    return (
        <div className="watch-container">
            <div className="ui form error">
                <div className="field">Enter stock symbol below to add to your watchlist</div>
                <input
                    placeholder='Enter stock symbol here'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='stock-input'
                />
                <div className="ui error message">
                    {showError && <p>Invalid symbol, please enter a valid symbol (e.g. AAPL)</p>}
                </div>
                <div onClick={handleSubmit} className="ui submit button">Add Stock</div>
                <div onClick={refreshStocks} className="ui submit button">Refresh</div>
            </div>
            <StockList
                stocks={stocks}
                removeStock={removeStock}
            />
        </div>
    )
}

export default WatchList