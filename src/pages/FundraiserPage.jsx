import { useParams } from "react-router-dom";
import useOneFundraiser from "../hooks/use-fundraiser";
import PledgeFormPopup from "../components/PledgeFormPopup";
import postPledge from "../api/post-pledge";
import UpdateFundraiserButton from "../components/UpdateFundraiserButton";
import { useState, useEffect } from "react";
import './FundraiserPage.css';



function FundraiserPage() {
    const { id } = useParams();
    // looking for 'id/ from '/fundraisers/:id' 
    const { fundraiser, fundraiserisLoading, fundraiserError } = useOneFundraiser(id);
    const [localFundraiser, setLocalFundraiser] = useState(null);

    useEffect(() => {
        if (fundraiser) {
            setLocalFundraiser(fundraiser);
        }
    }, [fundraiser]);

    if (fundraiserisLoading || !localFundraiser) {
        return (<p>loading...</p>)
    }

    if (fundraiserError) {
        return (<p>{fundraiserError.message}</p>)
    }


    async function handleAddPledge(pledge) {
        if (pledge.amount && pledge.comment && pledge.anonymous !== undefined) {
            const newPledge = await postPledge(id, pledge.amount, pledge.comment, pledge.anonymous);
            setLocalFundraiser(prev => ({
                ...prev,
                amount_raised: Number(prev.amount_raised || 0) + Number(pledge.amount),
                pledges: [...prev.pledges, newPledge]
            }));

        }
    }

    return (
        <section className="fundraiser-page">
            <div className="fundraiser-header">
                <img className="fundraiser-banner" src={localFundraiser.image} alt={localFundraiser.title} />
                <h1 className="fundraiser-title">{localFundraiser.title}</h1>
                <p className="fundraiser-desc">{localFundraiser.description}</p>
            </div>

            <div className="fundraiser-stats">
                <div className="stat">
                    <span className="stat-label">Goal</span>
                    <span className="stat-value">${localFundraiser.target.toLocaleString()}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Raised</span>
                    <span className="stat-value">${localFundraiser.amount_raised || 0}</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Status</span>
                    <span className={`stat-value ${localFundraiser.is_open ? "open" : "closed"}`}>
                        {localFundraiser.is_open ? "OPEN" : "CLOSED"}
                    </span>
                </div>
            </div>

            <div className="fundraiser-actions">
                <PledgeFormPopup onSubmit={handleAddPledge} />
                <UpdateFundraiserButton fundraiser={localFundraiser} />
            </div>

            <h2 className="pledge-title">Backers</h2>

            <ul className="pledge-list">
                {localFundraiser.pledges.map((p, key) => (
                    <li key={key} className="pledge-item">
                        <span className="pledge-name">
                            {p.anonymous ? "👽 Mysterious Voyager" : p.supporter_username}
                        </span>
                        <span className="pledge-amount">${p.amount}</span>
                        <span className="pledge-comment">"{p.comment}"</span>
                    </li>
                ))}
            </ul>
        </section>
    );

}

export default FundraiserPage;