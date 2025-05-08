import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';
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
            <button className="button-back" onClick={() => navigate(-1)}>
                ⬅ Back
            </button>
            <div className="trip-banner">

                <img src={trip.image} alt={trip.title} className="trip-image" />
            </div>

            <div className="trip-info-card">
                <h2 className="trip-title">{trip.title}</h2>

                <div className="trip-info">
                    <p><strong>Country:</strong> {trip.country}</p>
                    <p><strong>Description:</strong> {trip.description}</p>
                    <p><strong>Duration:</strong> {trip.duration} days / {trip.nights} nights</p>
                    <p><strong>Group Size:</strong> Up to {trip.groupSize} people</p>
                    <p><strong>Activity Level:</strong> {trip.activityLevel}</p>
                    <p><strong>Price:</strong> {trip.price} €</p>
                </div>

                <div className="button-container">
                    <button onClick={() => deleteTrip(id)} className="button-delete">Delete Trip</button>
                    <Link to={`/trips/${trip.id}/edit`}>
                        <button className="button-edit">Edit Trip</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TripDetail;


