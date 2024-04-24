import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [data,setData]=useState('')
  let [data1,setData1]=useState('')
  
  const toggleMode = () => {
    setIsRegister(!isRegister);
  };

  const handleChange = (event) =>{
    setData({...data,[event.target.name]:event.target.value})
    console.log(data);
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    setData1(data)

  }

  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '93vh' }}>
      <div className='bg-dark text-light text-center p-5 rounded'>

        <h1>{isRegister ? 'Register' : 'Login'}</h1>

        <div>{data1.username}</div>

        <form>
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
            <button type="submit" onClick={handleSubmit} className="btn btn-primary rounded-pill">
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
