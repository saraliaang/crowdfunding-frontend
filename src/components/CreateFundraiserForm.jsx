import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postFundraiser from '../api/post-fundraiser';

function FundraiserForm() {

    const navigate = useNavigate();
    const [fundraiser, setFundraiser] = useState({
        title: '',
        description: '',
        destination_year: null,
        image: null,
        is_open: false,
        era: null,
        year: null
    })

    const handleChange = (event) => {
        const { id, type, value, checked, name } = event.target;
        let newValue = value;
        if (type === 'file') {
            newValue = event.target.files[0];
        }

        if (id === 'is_open') {
            newValue = checked;
        }


        setFundraiser(prevFundraiser => {
            const updated = {
                ...prevFundraiser,
                [id || name]: newValue,
            };
            const year = Number(updated.year);
            const era = updated.era;
            if (year && era) {
                updated.destination_year = era === 'BC' ? year * -1 : year;
            }
            console.log(updated)
            return updated;
        })

    }
    //(prevFundraiser) => {...}: prevFundraiser is a callback form that gets the current state from React

    const handleSubmit = (event) => {
        event.preventDefault();
        if (fundraiser.title && fundraiser.description && fundraiser.destination_year && fundraiser.image) {
            postFundraiser(fundraiser.title, fundraiser.description, fundraiser.destination_year, fundraiser.image, fundraiser.is_open)
                .then((response) => {
                    navigate('/');
                })
        }
    }
    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2 className="auth-title">Create a Time Voyage</h2>

                <div className="auth-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Mission Title"
                        onChange={handleChange}
                    />
                </div>

                <div className="auth-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        placeholder="What moment do you want to visit?"
                        onChange={handleChange}
                    />
                </div>

                <div className="auth-group">
                    <label>Era & Year</label>

                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.4rem" }}>
                        <label>
                            <input type="radio" value="BC" name="era" onChange={handleChange} /> BC
                        </label>
                        <label>
                            <input type="radio" value="AC" name="era" onChange={handleChange} /> AD
                        </label>
                    </div>

                    <input
                        type="number"
                        id="year"
                        placeholder="e.g. 320 or 1922"
                        onChange={handleChange}
                    />

                    <p style={{ fontSize: "0.8rem", opacity: 0.8, marginTop: "6px" }}>
                        1 year = $10,000 travel cost (auto-calculated)
                    </p>
                </div>

                <div className="auth-group">
                    <label htmlFor="image">Destination Image URL</label>
                    <input
                        type="url"
                        id="image"
                        placeholder="https://"
                        onChange={handleChange}
                    />
                </div>

                <div className="auth-group" style={{ flexDirection: "row", gap: "8px", alignItems: "center" }}>
                    <label>Open for pledges?</label>
                    <input type="checkbox" id="is_open" onChange={handleChange} />
                </div>

                <button type="submit" className="auth-btn">Create Voyage</button>
            </form>
        </div>
    );

}
export default FundraiserForm;