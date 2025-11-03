import useFundraisers from '../hooks/use-fundraisers';
import FundraiserCard from '../components/FundraiserCard';
import Spaceship from "../components/Spaceship";
import "./HomePage.css";
import { Link } from "react-router-dom";



function HomePage() {

    const { fundraisers } = useFundraisers();
    return (
        <>
            <section id='landing'>
                <div id="cosmic-field ">
                    <div className="landing-haze"></div>
                    <div className="landing-stars"></div>
                </div>
                <div className="landing-content">
                    <div className="landing-tagline">
                        <p>
                            <span className="line1">Past is never lost — only waiting.</span><br />
                            <span className="line2">Return to the moments that built you.</span>
                        </p>
                    </div>
                    <Spaceship width="92vw" />
                    <Link to="/createfundraiser" className="hero-cta">
                        Launch Your PastPort
                    </Link>

                </div>
            </section>
            <section className="fundraiser-section">
                <h2 className="fundraiser-title">Active Time Voyages</h2>

                <div className="fundraiser-grid">
                    {fundraisers.map(f => (
                        <FundraiserCard key={f.id} fundraiserData={f} />
                    ))}
                </div>
            </section>

        </>
    )

}

export default HomePage;