import {useState, useEffect} from 'react';
import getFundraiserById from '../api/get-fundraiser-by-id';

export default function useOneFundraiser(id){
    const [fundraiser, setFundraiser] = useState(null);
    const [fundraiserisLoading, setIsLoading] = useState(true);
    const [fundraiserError, setError] = useState();
    useEffect(() =>{
        getFundraiserById(id)
        .then((fundraiser) => {
            setFundraiser(fundraiser);
            setIsLoading(false);
        }).catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    },[id])

    return {fundraiser, fundraiserisLoading, fundraiserError}
}