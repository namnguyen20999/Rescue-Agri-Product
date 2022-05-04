import React, { useState, useEffect } from 'react';
import { useDispatch, userSelector, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../Components/Loading';
import Error from '../Components/Success';
import Success from '../Components/Success';

export default function RegisterScreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const registerState = useSelector(state => state.registerUserReducer);
  const { error, loading, success } = registerState;

  const dispatch = useDispatch();
  function register() {
    if (password != cpassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        name,
        email,
        password
      };
      console.log(user);
      dispatch(registerUser(user));
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-5 mt-5">
        {loading && <Loading />}
        {success && <Success success="User Registered Successfully" />}
        {error && <Error error="Email already registered" />}
        <h1>This is the sign up page</h1>
        <input
          required
          type="text"
          placeholder="Name"
          className="form-control"
          value={name}
          onChange={e => {
            setname(e.target.value);
          }}
        />
        <input
          required
          type="text"
          placeholder="Email"
          className="form-control"
          value={email}
          onChange={e => {
            setemail(e.target.value);
          }}
        />
        <input
          required
          type="text"
          placeholder="Password"
          className="form-control"
          value={password}
          onChange={e => {
            setpassword(e.target.value);
          }}
        />
        <input
          required
          type="text"
          placeholder="Confirm password"
          className="form-control"
          value={cpassword}
          onChange={e => {
            setcpassword(e.target.value);
          }}
        />
        <button onClick={register} className="btn mt-3">
          REGISTER
        </button>
        <a href="/login">LOGIN</a>
      </div>
    </div>
  );
}
