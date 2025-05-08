import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import TripCard from '../components/TripCard';
import { useNavigate } from 'react-router-dom';
function FavoritesPage() {
    const { trips } = useContext(TripsContext);
    const favoriteTrips = trips.filter(trip => trip.isFavorite);
    const navigate = useNavigate();
    return (
        <div className="favorites-page">


            <button className="button-back" onClick={() => navigate(-1)}>
                ⬅ Back
            </button>




            <h2>⭐ Favorite Trips</h2>
            {favoriteTrips.length > 0 ? (
                <div className="trip-list">
                    {favoriteTrips.map(trip => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            ) : (
                <p>No favorites yet. Start exploring!</p>
            )}
        </div>
    );
}

export default FavoritesPage;
