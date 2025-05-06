import { Link } from 'react-router-dom';

//TripCard should be dumb (no axios, no useEffect)
//but with context, trip card just use prop from parent triplist 
//its triplist that getscontext
function TripCard({ trip }) {

    return (
        <>
            <div className='card-container'>
                <p>Hello, this is the detail of the {trip.title} </p>

                <Link to={`/trips/${trip.id}`}>
                    <article className="trip-card">

                        <div className='image-card'>
                            <img className='image ' src={trip.image} alt={trip.title} />
                        </div>

                        <div className='card-content'>
                            <h3>{trip.title}</h3>
                            <p>Rating: {trip.rating} </p>
                            <p>The duration is: {trip.duration} days</p>
                            <p>{trip.price} €</p>
                        </div>

                    </article>
                </Link>
            </div>
        </>
    );
}

export default TripCard;
