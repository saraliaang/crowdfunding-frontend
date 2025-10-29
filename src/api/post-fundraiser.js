async function postFundraiser(title, description,destination_year,image,is_open) {
    const url = `${import.meta.env.VITE_API_URL}/fundraisers/`;
    const token = window.localStorage.getItem("token")
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Token ${token}`,
        },
        body:JSON.stringify({
            'title':title,
            'description':description,
            'destination_year':destination_year,
            'image':image,
            'is_open':is_open,
        }),
        //prevent we can send any datatype to server side
    });


    if(!response.ok){
        const fallbackError = 'errorr tryna login';
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);    
    }
    return await response.json();

}

export default postFundraiser;