import TripCard from "./TripCard";
import axios from 'react';
import { useState, useContext } from 'react';
import { TripsContext } from '../context/TripsContext';

function TripList() {

    const { filteredTrips } = useContext(TripsContext);



    return (

        <div className="trip-list-container">
            <h3>List of Trips</h3>
            <div className="trip-list">
                {filteredTrips.length > 0
                    ? filteredTrips.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))
                    : <p>No trips available. Start planning your adventure!</p>}
            </div>
        </div>
    )
}



export default TripList;


