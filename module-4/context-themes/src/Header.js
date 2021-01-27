import React, {Component} from "react"
import {ThemeContextConsumer} from "./themeContext"

function Header(props) {
    return (
        <ThemeContextConsumer>
            {context => (
                <header className={`${context.theme}-theme`}>
                    <ul>
                        <li><a href="default.asp">Home</a></li>
                        <li><a href="news.asp">News</a></li>
                        <li><a href="contact.asp">Contact</a></li>
                        <li><a href="about.asp">About</a></li>
                    </ul>
                </header>
            )}
        </ThemeContextConsumer>
    )    
}

export default Header