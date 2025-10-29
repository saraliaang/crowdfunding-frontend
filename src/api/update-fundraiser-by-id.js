async function updateFundraiser(id,title, description,image){
    const url = `${import.meta.env.VITE_API_URL}/fundraisers/${id}`;
    const token = window.localStorage.getItem("token");
    const response = await fetch(url, { 
        method: 'PUT',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Token ${token}`,            
        },
        body:JSON.stringify({
            'title':title,
            'description':description,
            'image':image,
        }),
    });
    if(!response.ok){
        const fallbackError = 'Error fetching fundraiser';
        const data = await response.json().catch(() => {
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail || fallbackError;
        throw new Error(errorMessage);
    }
    return await response.json();
    
}

export default updateFundraiser;