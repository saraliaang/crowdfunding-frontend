import { useParams, useNavigate } from "react-router-dom";
import useOneFundraiser from "../hooks/use-fundraiser";
import PledgeFormPopup from "../components/PledgeFormPopup";
import postPledge from "../api/post-pledge";




function FundraiserPage() {
    const { id } = useParams();
    // looking for 'id/ from '/fundraisers/:id' 
    const navigate = useNavigate();

    const { fundraiser, fundraiserisLoading, fundraiserError } = useOneFundraiser(id);
    
    if (fundraiserisLoading) {
        return (<p>loading...</p>)
    }

    if (fundraiserError) {
        return (<p>{fundraiserError.message}</p>)
    }

    async function handleAddPledge(pledge){
        if(pledge.amount&&pledge.comment&&pledge.anonymous){
            await postPledge(id, pledge.amount, pledge.comment, pledge.anonymous );
        }
    }

    return (
        <div>
            <h2>{fundraiser.title}</h2>
            <h3>About this fundraiser: {fundraiser.description}</h3>
            <h3>Target amount: {fundraiser.target}</h3>
            <h3>Status: { fundraiser.is_open ? "open to pledge":"closed for pledge" }</h3>
            <h3>Total Pledge Amount:{fundraiser.pledges.reduce((total, pledge) => total + pledge.amount, 0)}</h3>
            <PledgeFormPopup onSubmit={handleAddPledge} />
            { window.localStorage.getItem("user_id") == fundraiser.owner  ? 
            (<button onClick={() => navigate(`/fundraisers/${fundraiser.id}/update`)}>
                Edit Fundraiser
            </button>) : null }<br/>
            <img src={fundraiser.image} alt="" />
            <h3>Pledges:</h3>
            <ul>
                {fundraiser.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.supporter_username} donated {pledgeData.amount}:"{pledgeData.comment}" 
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default FundraiserPage;