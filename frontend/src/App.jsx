import React from "react";
import "./App.scss";
import TripsList from "./components/TripsList/TripsList";

const App = () => (
    <div className="app">
        <div className="container">
            <h1 className="app__title">Recently viewed trips</h1>
            <TripsList />
        </div>
    </div>
)

export default App;
