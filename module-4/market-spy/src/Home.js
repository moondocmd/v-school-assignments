import React, { useState } from "react";
import "./styles.css";
import axios from "axios";


function Home() {

    // const [allValues, setAllValues] = useState({
    //     mobile: '',
    //     username: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    //  });
    //  const changeHandler = e => {
    //     setAllValues( prevValues => {
    //     return { ...prevValues,[e.target.name]: e.target.value}
    //  }
    //  }
    const [displayStock, setDisplay] = useState(false);
    const [currentStock, setCurrent] = useState({})

    const handleChange = (evt) => {
        setCurrent({value: evt.target.value});
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchStock();
    }

    const searchStock = () => {
        // axios.get(`https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=${this.state.query}&&verbose=1`).then(response =>{
        axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${currentStock}&apikey=M90JRSDK1T2INSLW`).then(response => {
            const stock = response.data['Global Quote'];
            console.log(stock);
            //myTextOptions[ 'character names' ].kid;
            //   this.setState({ movies: movies.Similar.Results })
            setDisplay(true);
            setCurrent(stock['05. price']);
        })
    }

    return (
        <div className="container">
            <div className="search">
                <form id="stockForm" onSubmit={handleSubmit}>
                    <div className="ui small icon input">
                        <input type="text" 
                            id="stockInput" 
                            name="stockInput" 
                            placeholder="Search for a Stock..." 
                            onChange={event => setCurrent(event.target.value)}/>
                        <i className="search icon"></i>
                    </div>
                    <button className="ui button" id="submitButton" type="submit" >Submit</button>
                </form>
            </div>
            <div className="stock-container">
                {/* <h2 className="ui header">
                    Market Spy
                <div className="sub header">Enter a symbol to view details</div>
                </h2> */}
                {/* {!displayStock &&
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>} */}

                {!displayStock ?
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p> :
                <p>Stock Price: {currentStock}</p>}
            </div>
        </div>
    )
}

export default Home