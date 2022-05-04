import React , {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../actions/userActions';

export default function LoginScreen() {
    const[name, setname] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    const loginErrorMessage = useSelector(state => state.authenticateUserReducer["errorMessage"]);


    const dispatch = useDispatch()
    function login() {
        dispatch(authenticateUser(email, password)).then( () => window.location.href='/');
    }

    return (
        <div className="row justify-content-center">
          <div className="col-md-5 mt-5">
            <h1>This is the login page</h1>
            {loginErrorMessage != "" ? <h5>{loginErrorMessage}</h5> : <></>}
            <input 
                required
                type="text" 
                placeholder="Email" 
                className='form-control'
                value={email}
                onChange={(e) => {setemail(e.target.value)}}
            />
            <input 
                required
                type="text" 
                placeholder="Password" 
                className='form-control'
                value={password}
                onChange={(e) => {setpassword(e.target.value)}}
            />
            <button onClick={login} className="btn mt-3">LOG IN</button>
            <a href="/register">REGISTER</a>
          </div>
        </div>
    )
}
