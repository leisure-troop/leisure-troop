import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TripsContext } from '../context/TripsContext';
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

        };

        //before we stored with useState , lives oonly in the component memory
        //not saved anywhere   
        // we added  trip locally with: 
        //  setTrips([...trips, newTrip]);
        //Now its a React+ API(Full App)

        //So we must tell the backend:

        // Hey! Save this trip to the database! with:
        axios.post(`${baseURL} / trips.json`, newTrip) //instead of: setTrips([...trips, newTrip]);

            //sends request then we update  local with:
            .then((response) => {
                setTrips([...trips, response.data])
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });



    }
    return (
        <div>

            <h1>Create Your Own Trip  </h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
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
                    value={durationDays}
                    onChange={(e) => setDurationDays(e.target.value)}
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
                    onChange={(e) => setPriceEur(e.target.value)}
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

        </div>
    );
}

export default CreateTrip;


