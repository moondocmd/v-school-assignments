import React from "react"
import {Switch, Route, Link} from "react-router-dom"

import Header from "./Header"
import Home from "./Home"
// import About from "./HotStocks"
import WatchList from "./WatchList"
import HotStocks from "./HotStocks"

function App() {    
    return (
        <div>
            <Header />
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Hot Stocks</Link>
                <Link to="/contact">Watch List</Link>
            </nav> */}
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/hot-stocks">
                    <HotStocks/>
                </Route>
                <Route path="/watch-list">
                    <WatchList/>
                </Route>
            </Switch>
        </div>
    )
}

export default App