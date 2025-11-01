import { useNavigate } from "react-router-dom";


function UpdateFundraiserButton(props){
    const {fundraiser} = props;
    const navigate = useNavigate();
    return(
        <div>
            { window.localStorage.getItem("user_id") == fundraiser.owner  ? 
            (<button onClick={() => navigate(`/fundraisers/${fundraiser.id}/update`)}>
                Edit Fundraiser
            </button>) : null }<br/>
        </div>
    )
}

export default UpdateFundraiserButton;