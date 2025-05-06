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


    return (
        <TripsContext.Provider value={{ trips, setTrips }} >
            {children}
        </TripsContext.Provider>
    )
}