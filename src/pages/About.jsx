import NavBar from "../components/Navbar";

function About() {


    return (
        <div className="about-page">
            <div className="about-hero">
                <h1>About Leisure Troop</h1>
                <p>Discover the spirit behind the journey.</p>
            </div>

            <div className="about-content">
                <section>
                    <h2>Our Mission</h2>
                    <p>
                        At Leisure Troop, we help travelers share and discover curated adventures from around the world.
                        Whether you're dreaming of the Arctic, wandering ancient cities, or relaxing in hidden beach towns—
                        our community-driven itineraries help you make it real.
                    </p>
                </section>

                <section>
                    <h2>How It Works</h2>
                    <p>
                        Browse trips, share your own, and connect with other explorers. Each trip is handpicked and contributed by real adventurers.
                    </p>
                </section>

                <section className="team-section">
                    <h2>Meet the Team</h2>
                    <p>
                        Leisure Troop was created by a group of passionate travelers and developers with a shared love for discovery.
                    </p>

                    <div className="team-images">
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Team Member 1" />
                            <p>Liam</p>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Team Member 2" />
                            <p>Sofia</p>
                        </div>
                        <div className="team-member">
                            <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Team Member 3" />
                            <p>Noah</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;


