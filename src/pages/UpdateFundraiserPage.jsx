import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import updateFundraiser from '../api/update-fundraiser-by-id';


function UpdateFundraiserPage(){
    const navigate = useNavigate();
    const [fundraiser, setFundraiser] = useState({
        title:'',
        description:'',
        image:null,
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFundraiser(prev => ({...prev, [name]:value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(fundraiser.title || fundraiser.description || fundraiser.image){
            updateFundraiser(fundraiser.id || fundraiser.title||fundraiser.description || fundraiser.image)
            .then(res => {navigate('/')})
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Update your fundraiser</h2>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" name='title' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" name='description' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" name='image' onChange={handleChange} />
            </div>
            <button type="submit">Update fundraiser</button>

        </form>
    )
}
//update the new pledges in the page immediatelly after submiting creation
//.catch missing
//how can i just update one field
//show button of update if user is donor

export default UpdateFundraiserPage;