import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from "../api/config";
import { data } from 'react-router-dom';
export const TripsContext = createContext();

export function TripsProvider({ children }) {

    const [trips, setTrips] = useState([]);

    useEffect(
        () => {
            axios.get(`${baseURL}/trips.json`)
                .then((response) => {
                    // convert the object that we get from Firebase to an array
                    const dataArr = Object.keys(response.data).map(
                        (id) => ({
                            id,
                            ...response.data[id],
                        })
                    )
                    setTrips(dataArr)
                })
                .catch((error) => { console.log(error) })
        }
        , [])

    const [filteredTrips, setFilteredTrips] = useState([]);

    useEffect(() => {
        setFilteredTrips(trips); // initialize with all trips
    }, [trips]);


    const filterTrips = (query) => {
        const cleanQuery = query.trim().toLowerCase();
        const result = trips.filter((trip) =>
            JSON.stringify(trip).toLowerCase().includes(cleanQuery)
        );
        setFilteredTrips(result);
    };


    return (
        <TripsContext.Provider value={{ trips, setTrips, filteredTrips, filterTrips }}>
            {children}
        </TripsContext.Provider>
    );
}