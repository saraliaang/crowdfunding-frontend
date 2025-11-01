import {Link} from 'react-router-dom';
import "./FundraiserCard.css";
import UpdateFundraiserButton from "./UpdateFundraiserButton";


function FundraiserCard(props){
    const {fundraiserData} = props;
    const fundraiserLink = `fundraisers/${fundraiserData.id}`;
    return(
        <div className='fundraiser-card'>
            <Link to={fundraiserLink}>
                <img src={fundraiserData.img}/>
                <h3>{fundraiserData.title}</h3>
            </Link>
            <UpdateFundraiserButton fundraiser={fundraiserData}/>
        </div>
    )
}


export default FundraiserCard;