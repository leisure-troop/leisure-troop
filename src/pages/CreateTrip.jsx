import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../api/config';
import { TripsContext } from '../context/TripsContext';
import NavBar from '../components/Navbar';

//here we will display a form with fields like title, image, duration
function CreateTrip() {
    const [title, setTitle] = useState('');
    const [country, setCountry] = useState('');
    const [duration, setDuration] = useState('');
    const [nights, setNights] = useState('');
    const [groupSize, setGroupSize] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [activityLevel, setActivityLevel] = useState('');
    const [description, setDescription] = useState('');

    const navigate = useNavigate();
    const { trips, setTrips } = useContext(TripsContext);


    const handleSubmit = (e) => {
        e.preventDefault();

        const newTrip = {
            title,
            country,
            description,
            duration,
            nights,
            groupSize,
            price,
            activityLevel,
            image,
            isFavorite: false
        };

        //before we stored with useState , lives oonly in the component memory
        //not saved anywhere   
        // we added  trip locally with: 
        //  setTrips([...trips, newTrip]);
        //Now its a React+ API(Full App)

        //So we must tell the backend:

        // Hey! Save this trip to the database! with:
        axios.post(`${baseURL}/trips.json`, newTrip)//instead of: setTrips([...trips, newTrip]);

            //sends request then we update  local with:
            .then((response) => {
                // Firebase returns the new ID as response.data.name
                const newTripWithId = { id: response.data.name, ...newTrip }; // ✅ newTrip is in scope
                setTrips([...trips, newTripWithId]);
                navigate('/');

            })
            .catch((error) => {
                console.log(error);
            });



    }
    return (
        <div className="create-trip-page">

            <div className='card-body-form'>

                <h1>Create Your Own Trip  </h1>
                <form onSubmit={handleSubmit} className='product-form'>
                    <label >Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />

                    <label>Country:</label>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />

                    <label>Main Image URL:</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />

                    <label>Duration (days):</label>
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    />

                    <label>Nights:</label>
                    <input
                        type="number"
                        value={nights}
                        onChange={(e) => setNights(e.target.value)}
                    />

                    <label>Group Size:</label>
                    <input
                        type="number"
                        value={groupSize}
                        onChange={(e) => setGroupSize(e.target.value)}
                    />

                    <label>Price (€):</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />

                    <label>Activity Level:</label>
                    <input
                        type="text"
                        value={activityLevel}
                        onChange={(e) => setActivityLevel(e.target.value)}
                    />



                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />

                    <button type="submit">Add Trip</button>
                </form>

            </div> </div >
    );
}

export default CreateTrip;


