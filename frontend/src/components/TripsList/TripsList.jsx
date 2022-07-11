import React, { useEffect, useState } from "react";
import "./TripsList-styles.scss";
import TripItem from "../TripItem/TripItem";

const TripsList = () => {
    const [tripsList, setTripsList] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API)
            .then(res => {
             return res.json()   
            })
            .then(data => {
                setTripsList(data.data);
            })
    }, []);

    return (
        <div className="tripsList__wrapper">
            {tripsList.map(item => (
                <TripItem 
                    key = {item.id}
                    trip = {item}
                />
            ))}
        </div>
    )
}

export default TripsList;