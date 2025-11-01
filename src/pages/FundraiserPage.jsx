import { useParams } from "react-router-dom";
import useOneFundraiser from "../hooks/use-fundraiser";
import PledgeFormPopup from "../components/PledgeFormPopup";
import postPledge from "../api/post-pledge";
import UpdateFundraiserButton from "../components/UpdateFundraiserButton";
import { useState, useEffect } from "react";



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


    async function handleAddPledge(pledge){
        if(pledge.amount&&pledge.comment&&pledge.anonymous!==undefined){
            const newPledge = await postPledge(id, pledge.amount, pledge.comment, pledge.anonymous );
            setLocalFundraiser(prev => ({...prev, pledges:[...prev.pledges,newPledge]}));
        }
    }

    return (
        <div>
            <h2>{localFundraiser.title}</h2>
            <h3>About this fundraiser: {localFundraiser.description}</h3>
            <h3>Target amount: {localFundraiser.target}</h3>
            <h3>Status: { localFundraiser.is_open ? "open to pledge":"closed for pledge" }</h3>
            <h3>    
                Total Pledge Amount: 
                {(localFundraiser.pledges).reduce((total, pledge) => total + (Number(pledge.amount)),0)}
            </h3>
            <PledgeFormPopup onSubmit={handleAddPledge} />
            <UpdateFundraiserButton fundraiser={localFundraiser}/>
            <img src={localFundraiser.image} alt="" />
            <h3>Pledges:</h3>
            <ul>
                {localFundraiser.pledges.map((pledgeData, key) => {
                    return (
                        <li key={key}>
                            {pledgeData.anonymous === true
                                ? "👽 mysterious alien " 
                                : pledgeData.supporter_username}
                                donated {pledgeData.amount}:"{pledgeData.comment}" 
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default FundraiserPage;