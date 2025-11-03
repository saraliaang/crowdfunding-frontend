import { Link } from 'react-router-dom';
import "./FundraiserCard.css";
import UpdateFundraiserButton from "./UpdateFundraiserButton";


function FundraiserCard(props) {
    const { fundraiserData } = props;
    const fundraiserLink = `fundraisers/${fundraiserData.id}`;
    const { id, title, image, amount_raised, target } = fundraiserData;

    return (
        <div className="fundraiser-card">
            <Link to={`/fundraisers/${id}`}>
                <div className="card-img-wrap">
                    <img src={image} alt={title} />
                </div>

                <h3 className="card-title">{title}</h3>

                <div className="card-stats">
                    <span>RAISED:</span>
                    <span> ${amount_raised} / ${target}</span>
                </div>
                <div className="otherStates">
                    <span>dot </span>
                    
                </div>
            </Link>
            <UpdateFundraiserButton fundraiser={fundraiserData} />
        </div>
    )
}


export default FundraiserCard;
