import { Link } from 'react-router-dom';
import ShareButton from "../components/ShareButton";
import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import axios from 'axios';
import { baseURL } from '../api/config';

function TripCard({ trip }) {
    const { trips, setTrips } = useContext(TripsContext);

    const toggleFavorite = () => {
        const updatedTrip = { ...trip, isFavorite: !trip.isFavorite };

        // Update on Firebase
        axios.patch(`${baseURL}/trips/${trip.id}.json`, { isFavorite: updatedTrip.isFavorite })
            .then(() => {
                // Update local state
                const updatedTrips = trips.map(t => t.id === trip.id ? updatedTrip : t);
                setTrips(updatedTrips);
            })
            .catch((error) => console.log(error));
    };

    const shareUrl = `leisure-troop.netlify.app/${trip.id}`;

    return (
        <div className="card-body">
            <ShareButton url={shareUrl} />

            <Link to={`/trips/${trip.id}`}>
                <div className="text-image-container">
                    <div className="image-container">
                        <img src={trip.image} alt={trip.title} className="image" />
                    </div>

                    <div className="text-container">
                        <h3>{trip.title}</h3>
                        <p>{trip.description}</p>
                        <p>Duration: {trip.duration_days} days</p>
                        <p>Rating: {trip.rating}</p>
                    </div>
                </div>

                <div className="button-container">
                    <p className="price-button">{trip.price} €</p>
                </div>
            </Link>

            <button onClick={toggleFavorite} className="favorite-button">
                {trip.isFavorite ? '⭐ Favorite List ' : '☆ Add to Favorites'}
            </button>
        </div>
    );
}

export default TripCard;
