import React from "react";
import "./Details-styles.scss";
import PropTypes from "prop-types";

const Details = ({countries, days}) => {
    return (
        <>
            {(countries || days) &&
                <div className="details">
                    {countries &&
                        <div className="details__countries">{countries} {countries > 1 ? 'Countries' : 'Country'}</div>
                    }

                    {days &&
                        <div className="details__days">{days} {days > 1 ? 'Days' : 'Day'}</div>
                    }
                </div>
            }
        </>
    )
}

Details.propTypes = {
    countries: PropTypes.number.isRequired,
    days: PropTypes.number.isRequired,
}

export default Details;