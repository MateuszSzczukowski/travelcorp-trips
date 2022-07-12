import React from "react";
import "./Price-styles.scss";
import PropTypes from "prop-types";

const Price = ({price}) => {
    const {from, discount} = price;
    return (
        <>
            {from && discount &&
                <div className="price">
                    {from &&
                        <>
                            <span className="price__from">From &euro;{from}</span>         
                            <span className="price__separator">&#8226;</span>
                        </>
                    }
    
                    {discount &&
                        <span className="price__discount">Price &euro;{discount}</span>
                    }
                </div>
            }
        </>
    )
}

Price.propTypes = {
    from: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
}

export default Price;