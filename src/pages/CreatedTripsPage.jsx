import { useContext } from 'react';
import { TripsContext } from '../context/TripsContext';
import TripCard from '../components/TripCard';

function CreatedTripsPage() {
    const { trips } = useContext(TripsContext);

    const currentUser = "maria"; // simulate login for now

    const myTrips = trips.filter(trip => trip.createdBy === currentUser);

    return (
        <div className="created-trips-page">
            <h2>✍️ My Created Trips</h2>
            {myTrips.length > 0 ? (
                <div className="trip-list">
                    {myTrips.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            ) : (
                <p>No trips created yet. Start planning your adventure!</p>
            )}
        </div>
    );
}

export default CreatedTripsPage;