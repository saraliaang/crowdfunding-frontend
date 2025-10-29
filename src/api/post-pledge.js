async function postPledge(fundraiserId, amount, comment, anonymous){
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;
    const token = window.localStorage.getItem("token")
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
            Authorization: `Token ${token}`,
        },
        body:JSON.stringify({
            'fundraiser':fundraiserId,
            'amount':amount,
            'comment':comment,
            'anonymous':anonymous,
        }),
        //prevent we can send any datatype to server side
    });
}

export default postPledge;