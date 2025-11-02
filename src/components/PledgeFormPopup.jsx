import { useState } from 'react';
import './PledgeFormPopup.css'

export default function PledgeFormPopup({  onSubmit }) {
    const [show, setShow] = useState(false);
    const [pledge, setPledge] = useState({
        amount: null,
        comment: '',
        anonymous: null,
    })

    function handleChange(event) {
        setPledge(prevPledge => {
            const updated = { ...prevPledge,[event.target.name]: event.target.value};
            return updated;
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(pledge);
        setShow(false);
    }

    return (
        <>
            <button  className="pledge-btn" onClick={() => setShow(true)}>Add Pledge</button>
            {show && (
                <div className="overlay">
                    <div className="popup">
                        <h3>Make a Pledge</h3>
                        <form onSubmit={handleSubmit}>
                            <label>Amount:</label>
                            <input
                                type="number"
                                name="amount"
                                placeholder='Enter the amount you wish to donate here'
                                onChange={handleChange}
                            />

                            <label>Leave some comment:</label>
                            <input
                                type="text"
                                name="comment"
                                placeholder='Leave a comment'
                                onChange={handleChange}
                            />
                            <h3>Do you wish to stay anonymous?</h3>
                            <label htmlFor="yes">Yes</label>
                            <input type="radio" value='true' name='anonymous'onChange={handleChange}/>
                            <label htmlFor="no">No</label>
                            <input type="radio" value='false' name='anonymous'onChange={handleChange}/>

                            <div style={{ marginTop: "10px" }}>
                                <button  className="submit-btn" type="submit">Submit</button>
                                <button className="cancel-btn" type="button" onClick={() => setShow(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

