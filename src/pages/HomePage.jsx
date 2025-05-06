import NavBar from '../components/navbar';
import TripList from '../components/TripList';
function HomePage() {


    return (
        <div className="home">
            <NavBar />
            <section className="product-list">
                <h1> Welcome to Leisure Troop: Travel Circuits Explorer</h1>
                <p>Discover and share amazing travel circuits around the world.</p>

                <TripList />
            </section>
        </div>
    );
}

export default HomePage;


