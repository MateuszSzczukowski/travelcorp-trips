import React from "react";
import "./Details-styles.scss";
import PropTypes from "prop-types";

const Details = ({countries, days}) => {
    return (
        <div className="details">
            <div className="details__countries">{countries} Countries</div>,
            <div className="details__days">{days} Days</div>
        </div>
    )
}

Details.prototype = {
    countries: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
}

export default Details;