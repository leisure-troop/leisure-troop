import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TripDetail() {

    const { id } = useParams();
    const { trips, setTrips } = useContext(TripsContext);
    const navigate = useNavigate();

    const trip = trips.find((tripObj) => tripObj.id === id);

    //If the trips array hasn’t loaded yet, trip will be undefined,
    //  and trying to access trip.title will crash the app
    if (!trip) return <p>Loading trip details...</p>;

    //delete button here with axios cause it's a backend delete:
    const deleteTrip = (id) => {
        axios.delete(`https://leisure-troop-default-rtdb.europe-west1.firebasedatabase.app/trips/${id}.json`)
            .then(() => {
                const newList = trips.filter((theTrip) => theTrip.id !== id);
                setTrips(newList);
                navigate('/');  //return to the list (search if i have to import it)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="trip-detail">
            <h2>{trip.title}</h2>
            <img src={trip.image} alt={trip.title} className="image" />

            <div className="text-container">
                <p>{trip.description}</p>
                <p>Duration: {trip.duration_days} days</p>
                <p>Rating: {trip.rating}</p>
                <p>Price: {trip.price} €</p>
            </div>

            <div className="button-container">
                <button onClick={() => deleteTrip(id)} className="button-delete">
                    Delete Trip
                </button>
            </div>
        </div>
    );
}

export default TripDetail;


