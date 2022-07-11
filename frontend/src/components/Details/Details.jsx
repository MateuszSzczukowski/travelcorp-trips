import React from "react";
import "./Details-styles.scss";

const Details = ({countries, days}) => {
    return (
        <div className="details">
            <div className="details__countries">{countries} Countries</div>,
            <div className="details__days">{days} Days</div>
        </div>
    )
}

export default Details;