import React from "react"
import { Switch, Route, Link } from "react-router-dom"

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
// import About from "./HotStocks"
import WatchList from "./WatchList";
import HotStocks from "./HotStocks";

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/hot-stocks">
                    <HotStocks />
                </Route>
                <Route path="/watch-list">
                    <WatchList />
                </Route>
            </Switch>
            <Footer />
        </div>
    )
}

export default App