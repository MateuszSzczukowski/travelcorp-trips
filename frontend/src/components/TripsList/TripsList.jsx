import React, { useEffect, useState } from "react";
import "./TripsList-styles.scss";
import TripItem from "../TripItem/TripItem";

const TripsList = () => {
    const [tripsList, setTripsList] = useState([]);

    useEffect(() => {
        (async () => {
            try {
              const response = await fetch(process.env.REACT_APP_API);
              const tripsData = await response.json();
              setTripsList(tripsData.data);
            } catch (err) {
                throw new Error(`HTTP error! status: ${err.status}`);
            }
        })();
    },[]);

    return (
        <>
            {tripsList.length > 0 &&
                <div className="tripsList__wrapper">
                    {tripsList.map(item => (
                        <TripItem 
                            key={item.id}
                            trip={item}
                        />
                    ))}
                </div>
            }
        </>
    )
}

export default TripsList;