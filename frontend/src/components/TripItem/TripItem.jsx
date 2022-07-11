import React from "react";
import "./TripItem-styles.scss";
import Details from "../Details/Details";
import Price from "../Price/Price";
import Rating from "../Rating/Rating";

const TripItem = ({trip}) => {
    const { title, countries, days, rating, price, thumbnail, url  } = trip || {};
    return (
        <a href={url} className="tripItem">
            <div className="tripItem__image-wrapper">
                <img className="tripItem__image" src={thumbnail} alt={title} />
            </div>
            <div className="tripItem__info">
                <div className="tripItem__info-row">
                    <Details 
                        countries = {countries}
                        days = {days}
                    />
                    <h2 className="tripItem__title">{title}</h2>
                </div>
                <div className="tripItem__info-row">
                    <Rating 
                        rating = {rating}
                    />
                    <Price 
                        price = {price}
                    />
                </div>
            </div>
        </a>
    )
}

export default TripItem;