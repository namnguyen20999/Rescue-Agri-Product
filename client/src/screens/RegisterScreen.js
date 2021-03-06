import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../Components/Loading';
import Error from '../Components/Error';
import Success from '../Components/Success';
import logo from '../assets/logo_images/logo.png';

export default function Registerscreen() {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const registerstate = useSelector(state => state.registerUserReducer);
  const { error, loading, success } = registerstate;
  const dispatch = useDispatch();

  const register = () => {
    if (password !== cpassword) {
      alert('Passwords do not match');
    } else {
      const user = {
        name,
        email,
        password
      };
      dispatch(registerUser(user));
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const btnstyle = {
    backgroundColor: '#3bb77e',
    color: 'white'
  };

  return (
    <div className="register">
      <div className="row justify-content-center mt-5">
        <div className="d-flex flex-column align-items-center col-md-3 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          {loading && <Loading />}
          {success && <Success success="User Registered Successfully" />}
          {error && <Error error="Email is already registered" />}
          <img src={logo} width="100" height="100" alt="React Bootstrap logo" />

          <h2 className="text-center" style={{ fontSize: '35px' }}>
            Register
          </h2>
          <h6 style={{ fontWeight: 'light', textAlign: 'center', fontStyle: 'italic', color: 'grey' }} className="mx-3">
            Register to start selling/buying agriculture products today!
          </h6>

          <div className="d-flex flex-column align-items-center justify-content-center">
            <input
              required
              type="text"
              placeholder="name"
              className="form-control my-2"
              value={name}
              onChange={e => {
                setname(e.target.value);
              }}
            />
            <input
              required
              type="text"
              placeholder="email"
              className="form-control my-2"
              value={email}
              onChange={e => {
                setemail(e.target.value);
              }}
            />
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="password"
              className="form-control my-2"
              value={password}
              required
              onChange={e => {
                setpassword(e.target.value);
              }}
            />
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="confirm password"
              className="form-control my-2"
              value={cpassword}
              required
              onChange={e => {
                setcpassword(e.target.value);
              }}
            />
            <input type="checkbox" onClick={togglePassword} />
            Show password
            <button style={btnstyle} onClick={register} className="btn my-2">
              REGISTER
            </button>
            <br />
            <span className="mb-5" style={{ color: 'grey' }}>
              Already have an account?&nbsp;
              <a style={{ color: '#3bb77e' }} href="/login">
                Login
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
