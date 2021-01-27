import React from "react"

import UglyThingList from "./UglyThingList"
import Form from "./Form"
import "./styles.css"

function App() {
    return (
        <div className="container">
            <h2>Ugly Things!</h2>
            <Form />
            <UglyThingList />
        </div>
    )
}

export default App