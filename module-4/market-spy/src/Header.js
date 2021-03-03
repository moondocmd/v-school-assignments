import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./styles.css"

function Header(props) {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/hot-stocks">Hot Stocks</Link>
            <Link to="/watch-list">Watch List</Link>
            <div className="title">Market Spy</div>
        </header>
    )
}

export default Header