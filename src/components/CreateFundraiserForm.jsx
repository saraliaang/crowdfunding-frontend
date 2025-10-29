import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import postFundraiser from '../api/post-fundraiser';

function FundraiserForm(){

    const navigate = useNavigate();
    const [fundraiser, setFundraiser] = useState({
        title:'',
        description:'',
        destination_year:null,
        image:null,
        is_open:false,
        era:null,
        year:null
    })

    const handleChange = (event) => {
        const {id, type, value, checked, name} = event.target;
        let newValue = value;
        if (type === 'file'){
            newValue = event.target.files[0];
        }

        if (id === 'is_open'){
            newValue = checked;
        }


        setFundraiser(prevFundraiser => {
            const updated = {
            ...prevFundraiser,
            [id||name]:newValue,
            };
            const year = Number(updated.year);
            const era = updated.era;
            if (year && era) {
                updated.destination_year = era === 'BC' ? year * -1 : year;
            }
            return updated;
        })
        
    }
    //(prevFundraiser) => {...}: prevFundraiser is a callback form that gets the current state from React

    const handleSubmit = (event) => {
        event.preventDefault();
        if(fundraiser.title && fundraiser.description && fundraiser.destination_year && fundraiser.image && fundraiser.is_open){
            postFundraiser(fundraiser.title,fundraiser.description, fundraiser.destination_year,fundraiser.image,fundraiser.is_open)
            .then((response) => {
                navigate('/');
            })
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a fundraiser</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id='title' placeholder='Title' onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <input type="textarea" id='description' placeholder='Description' onChange={handleChange} />
            </div>
            <div>
                <input type="radio" value='BC' name='era' onChange={handleChange}/>
                <label htmlFor="era">BC</label>
                <input type="radio" value='AC' name='era' onChange={handleChange}/> 
                <label htmlFor="era">AC</label>
                <input type="number" id='year' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="image">Image URL:</label>
                <input type="url"  id='image' placeholder='Enter image URL' onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="checkbox">Is this fundraiser open for donation? </label>
                <input type="checkbox" id='is_open' onChange={handleChange}/>
            </div>
            <button type="submit">Create fundraiser</button>

        </form>
    )
}
export default FundraiserForm;