import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import Error from '../Components/Error';
import Loading from '../Components/Loading';
import logo from '../assets/logo_images/logo.png';

export default function Loginscreen() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const loginstate = useSelector(state => state.loginUserReducer);
  const [passwordShown, setPasswordShown] = useState(false);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  const btnstyle = {
    backgroundColor: '#3bb77e',
    color: 'white'
  };

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      window.location.href = '/';
    }
  }, []);

  const login = () => {
    const user = { email, password };
    dispatch(loginUser(user));
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div className="d-flex flex-column align-items-center col-md-3 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <img src={logo} width="100" height="100" alt="React Bootstrap logo" />
          <h2 className="text-center" style={{ fontSize: '35px' }}>
            Login
          </h2>
          <h6 style={{ fontWeight: 'light', textAlign: 'center', fontStyle: 'italic', color: 'grey' }} className="mx-3">
            Log in to start selling/buying agriculture products today!
          </h6>
          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div className="d-flex flex-column align-items-center justify-content-center">
            <input
              required
              type="text"
              placeholder="email"
              className="form-control my-3"
              value={email}
              onChange={e => {
                setemail(e.target.value);
              }}
            />
            <input
              type={passwordShown ? 'text' : 'password'}
              placeholder="password"
              className="form-control"
              value={password}
              required
              onChange={e => {
                setpassword(e.target.value);
              }}
            />
            <input style={{ marginTop: '4px' }} type="checkbox" onClick={togglePassword} />
            Show password
            <button style={btnstyle} onClick={login} className="btn mt-3 mb-3">
              LOGIN
            </button>
            <span className="mb-5" style={{ color: 'grey' }}>
              Don't have an account?&nbsp;
              <a style={{ color: '#3bb77e' }} href="/register">
                Register
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
