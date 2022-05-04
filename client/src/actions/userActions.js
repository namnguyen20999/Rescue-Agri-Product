import axios from 'axios';
export const registerUser=(user)=> async dispatch=>{
    dispatch({type: "USER_REGISTER_REQUEST"})

    try {
        const response = await axios.post('/api/users/register', user)
        console.log(response)
        dispatch({type: 'USER_REGISTER_SUCCESS'})
    } catch (error) {
        dispatch({type: 'USER_REGISTER_FAILED', payload: error})
    }
}

export const authenticateUser=(email, password)=> async dispatch=>{
    dispatch({type: "USER_LOGIN_REQUEST"})

    try {
        const response = await axios.get('/api/users/login/' + email)

            if (response["data"][0]["password"] == password) {
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    payload: response
                })
                localStorage.setItem('loginInfo', JSON.stringify(response));
                console.log("true");
            } else {
                console.log("false");
            };
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAILED', 
            payload: {
                message: "Email is unregistered or invalid! Please try again",
                error: error
            }
        })
    }
}

export const logout=()=> async dispatch=>{
    try {
        dispatch({type: "LOGOUT"})
    } catch (error) {
        console.log("Logout error")
    }
}