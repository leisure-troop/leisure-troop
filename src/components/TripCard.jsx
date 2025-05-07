import { Link } from 'react-router-dom';

//TripCard should be dumb (no axios, no useEffect)
//but with context, trip card just use prop from parent triplist 
//its triplist that getscontext
function TripCard({ trip }) {
    return (
        <div className="card-body">
            <Link to={`/trips/${trip.id}`}  >
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
        </div>
    );
}

export default TripCard;