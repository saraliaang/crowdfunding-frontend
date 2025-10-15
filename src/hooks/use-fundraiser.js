import {useState, useEffect} from 'react';
import getFundraiserById from '../api/get-fundraiser-by-id';

export default function useOneFundraiser(id){
    const [fundraiser, setFundraiser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    useEffect(() =>{
        getFundraiserById(id)
        .then((fundraiser) => {
            setFundraiser(fundraiser);
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    })

    return {fundraiser, isLoading, error}
}