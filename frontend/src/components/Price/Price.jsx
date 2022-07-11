import React from "react";
import "./Price-styles.scss";

const Price = ({price}) => {
    const {from, discount} = price || {};

    return (
        <div className="price">
            <span className="price__from">From &euro;{from}</span>         
            <span className="price__separator">&#8226;</span>
            <span className="price__discount">Price &euro;{discount}</span>
        </div>
    )
}

export default Price;