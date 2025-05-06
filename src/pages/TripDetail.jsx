import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import axios from 'react';
function TripDetail() {

    const { id } = useParams();
    const { trips } = useContext(TripsContext);

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
        <div>
            <button onClick={() => deleteTrip(id)}  >
                Delete the Trip
            </button>
            <h1>Trip Detail  </h1>

            <h2>{trip.title}</h2>
            <img src={trip.image} alt={trip.title} />
            <p>{trip.description}</p>
            <p>Rating: {trip.rating} </p>
            <p>The duration is: {trip.duration} days</p>
            <p>{trip.price} €</p>

        </div>
    );
}

export default TripDetail;


