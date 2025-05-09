import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import CreateTrip from './pages/CreateTrip';
import TripDetail from './pages/TripDetail';
import Footer from './components/Footer';
import NavBar from './components/Navbar';
import EditTrip from './pages/EditTrip';
import CreatedTripsPage from './pages/CreatedTripsPage'
import FavoritesPage from './pages/FavoritesPage'
function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/create-trip" element={<CreateTrip />} />
        <Route path="/trips/:id" element={<TripDetail />} />
        <Route path="/trips/:id/edit" element={<EditTrip />} />
        <Route path="/created" element={<CreatedTripsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        <Route path="*" element={<h2>Page Not Found</h2>} />
      </Routes>
      <Footer />
    </>

    /*The :id in: path="/trips/:id"    is a dynamic parameter — a placeholder
    React Router will match:
    
      /trips/abc123
    
        / trips / 99
    
        / trips / norway - 2025 */
  );
}

export default App;