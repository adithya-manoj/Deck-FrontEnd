import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './userSlice';

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [data, setData] = useState({ username: '', email: '', password: '' });
  const user = useSelector(state => state.user.value);
  const dispatch = useDispatch();

  const toggleMode = () => {
    setIsRegister(!isRegister);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username } = data;
    dispatch(login({ user: username }));
  };

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '93vh' }}>
      <div className='bg-dark text-light text-center p-5 rounded'>
        <h1>{isRegister ? 'Register' : 'Login'}</h1>
        <div>Welcome {user}</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="username" onChange={handleChange} className="form-control rounded-pill" placeholder="Username" />
          </div>
          {isRegister && 
            <div className="mb-3">
              <input type="text" name="email" onChange={handleChange} className="form-control rounded-pill" placeholder="Email" />
            </div>
          }
          <div className="mb-3">
            <input type="password" name="password" onChange={handleChange} className="form-control rounded-pill" placeholder="Password" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary rounded-pill">
              {isRegister ? 'Register' : 'Login'}
            </button>
          </div>
          <div className="mb-3">
            <p>
              {isRegister ? 'Already have an Account? ' : "Don't have an Account? "}
              <Link to='' onClick={toggleMode}>{isRegister ? 'Login' : 'Register'}</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
