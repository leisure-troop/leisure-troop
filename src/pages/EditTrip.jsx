import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { TripsContext } from '../context/TripsContext';
import axios from 'axios';
import { baseURL } from '../api/config';
import { Link } from 'react-router-dom';
function EditTrip() {
    const { id } = useParams();
    const { trips, setTrips } = useContext(TripsContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        country: '',
        image: '',
        duration: '',
        nights: '',
        groupSize: '',
        price: '',
        activityLevel: '',
        description: ''
    });

    // Load trip data into form
    useEffect(() => {
        const tripToEdit = trips.find((trip) => trip.id === id);
        if (tripToEdit) {
            setFormData(tripToEdit);
        }
    }, [id, trips]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.patch(`${baseURL}/trips/${id}.json`, formData)
            .then(() => {
                const updatedTrips = trips.map((trip) => trip.id === id ? { ...formData, id } : trip);
                setTrips(updatedTrips);
                navigate(`/trips/${id}`);
            })
            .catch((err) => console.error("Update error:", err));
    };

    return (
        <div className="card-body-form">
            <h1>Edit Your Trip</h1>
            <form onSubmit={handleSubmit} className="product-form">
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                        {key === 'description' ? (
                            <textarea name={key} value={formData[key]} onChange={handleChange} />
                        ) : (
                            <input
                                type={key === 'price' || key === 'groupSize' || key === 'duration' || key === 'nights' ? 'number' : 'text'}
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                            />
                        )}
                    </div>
                ))}
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
}

export default EditTrip;
