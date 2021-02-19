import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./styles.css"

function Header(props) {
    return (
        <header>
            <Link to="/">Home</Link>
            <Link to="/hot-stocks">Hot Stocks</Link>
            <Link to="/watch-list">Watch List</Link>
            {/* <ul>
                <li><a href="default.asp">Home</a></li>
                <li><a href="news.asp">News</a></li>
                <li><a href="contact.asp">Contact</a></li>
                <li><a href="about.asp">About</a></li>
            </ul> */}
            <div className="title">Market Spy</div>
        </header>
    )
}

export default Header