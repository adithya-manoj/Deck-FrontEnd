import React from 'react';

const Login = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center' style={{ height: '93vh' }}>
      <div className='bg-dark text-light text-center p-5 rounded'>
        <h1>Login</h1>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control rounded-pill" placeholder="Username" />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control rounded-pill" placeholder="Password" />
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-primary rounded-pill">Login</button>
          </div>
          <div className="mb-3">
          <button type="submit" className="btn btn-primary rounded-pill">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;