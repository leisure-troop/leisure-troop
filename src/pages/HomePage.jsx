// src/pages/HomePage.jsx
import { useContext, useState, useEffect } from 'react';
import { TripsContext } from '../context/TripsContext';
import NavBar from '../components/Navbar';
import TripList from '../components/TripList';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import SideBar from '../components/Sidebar';
function HomePage() {
    // Call the parent to transmit /access  to all trips from the context
    const { filterTrips } = useContext(TripsContext);

    return (
        <div className="home">


            <main className="main-home">
                <header className="hero-header">
                    <div className="hero-text">
                        <h1>Explore the World</h1>
                        <p>Find your next unforgettable adventure</p>
                        <div><SearchBar onSearch={filterTrips} /> </div>

                    </div>
                </header>

                <div className="create-trip-wrapper">
                    <Link to="/create-trip" className="create-trip-button">+</Link>
                </div>
                <div className='page-layout'>
                    <SideBar />
                    <div className='main-content'><TripList /> </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
