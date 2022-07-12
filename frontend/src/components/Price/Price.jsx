import React from "react";
import "./Price-styles.scss";
import PropTypes from "prop-types";

const Price = ({price}) => {
    if(!price) return null;

    const {currency, from, discount} = price;
    return (
        <>
            {from && discount &&
                <div className="price">
                    {from && currency &&
                        <>
                            <span className="price__from">From {currency}{from}</span>         
                            <span className="price__separator">&#8226;</span>
                        </>
                    }
    
                    {discount && currency &&
                        <span className="price__discount">Price {currency}{discount}</span>
                    }
                </div>
            }
        </>
    )
}

Price.propTypes = {
    from: PropTypes.number,
    discount: PropTypes.number,
}

export default Price;