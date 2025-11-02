import { useNavigate } from "react-router-dom";
import './UpdateFundraiserButton.css'


function UpdateFundraiserButton(props){
    const {fundraiser} = props;
    const navigate = useNavigate();
    return(
        <div>
            { window.localStorage.getItem("user_id") == fundraiser.owner  ? 
            (<button className="edit-btn" onClick={() => navigate(`/fundraisers/${fundraiser.id}/update`)}>
                Edit Fundraiser
            </button>) : null }<br/>
        </div>
    )
}

export default UpdateFundraiserButton;