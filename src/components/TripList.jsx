import TripCard from "./TripCard";
import axios from 'react';
import { useState, useContext } from 'react';
import { TripsContext } from '../context/TripsContext';

function TripList() {

    const { trips } = useContext(TripsContext);



    return (

        <div className="trip-list-container">
            <h3>List of trips</h3>
            <div className="trip-list">
                {
                    trips.length > 0 && trips.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
            </div>
        </div>
    );
}



export default TripList;


