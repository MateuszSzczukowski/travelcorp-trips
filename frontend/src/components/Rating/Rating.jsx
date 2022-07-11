import React from "react";
import "./Rating-styles.scss";
import ReactStars from "react-rating-stars-component";

const Rating = ({rating}) => {

    return (
        <div className="rating">
            <ReactStars
                count={5}
                size={16}
                activeColor="#ffd700"
                isHalf={true}
                edit={false}
                value={rating}
            />
            <span className="rating__value">{rating}</span>
        </div>
    )
}

export default Rating;