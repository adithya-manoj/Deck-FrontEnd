import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Home } from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

// import {Technology} from './Technology';
import Technology from './Technology';
import Ideas from './Ideas';
import Leadership from './Leadership';

import NavBarComp from './NavBarComp';
import { Login } from './login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBarComp/>}>
      <Route index element={<Home/>}></Route>
      <Route path='Technology' element={<Technology/>}></Route>
      <Route path='Ideas' element={<Ideas/>}></Route>
      <Route path='Leadership' element={<Leadership/>}></Route>
      <Route path='Login' element={<Login/>}></Route>
    </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

