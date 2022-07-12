import React from "react";
import "./TripItem-styles.scss";
import PropTypes from "prop-types";
import Details from "../Details/Details";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";

const TripItem = ({trip}) => {
    const { title, countries, days, rating, price, thumbnail, url } = trip;
    return (
        <a href={url} className="tripItem">
            <div className="tripItem__image-wrapper">
                {thumbnail &&
                    <img className="tripItem__image" src={thumbnail} alt={title} />
                }
            </div>
            {(title || countries || days || rating || price) &&
                <div className="tripItem__info">
                    <Details 
                        countries={countries}
                        days={days}
                    />
                    {title &&
                        <h2 className="tripItem__title">{title}</h2>
                    }
                    <Rating rating={rating} />
                    <Price price={price} />
                </div>
            }
        </a>
    )
}

TripItem.propTypes = {
    trip: PropTypes.shape({
        title: PropTypes.string.isRequired,
        countries: PropTypes.number,
        days: PropTypes.number.isRequired,
        rating: PropTypes.number,
        price: PropTypes.shape({
            currency: PropTypes.string.isRequired,
            from: PropTypes.number.isRequired,
            discount: PropTypes.number.isRequired
        }),
        thumbnail: PropTypes.string,
        url: PropTypes.string.isRequired,
    }).isRequired
}

export default TripItem;