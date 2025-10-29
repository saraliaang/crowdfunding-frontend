async function postLogin(username, password) {
    const url = `${import.meta.env.VITE_API_URL}/api-token-auth/`;
    const response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            'username':username,
            'password':password,
        })
        //prevent we can send any datatype to server side

    })
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

export default postLogin;