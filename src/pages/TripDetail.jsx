import { useParams } from 'react-router-dom'
function TripDetail() {

    const { id } = useParams();
    const { trips } = useContext(TripsContext);

    const trip = trips.find((tripObj) => tripObj.id === Number(id));
    //delete button here with axios cause it's a backend delete:
    const deleteTrip = (id) => {
        axios.delete(`${baseURL}/trips/${id}.json`)
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
                Delete Trip
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


