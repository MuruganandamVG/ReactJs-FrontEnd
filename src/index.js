import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './components/Login'
import {CookiesProvider} from 'react-cookie';
import Dashboard from './components/Dashboard';
import Registration from './components/Registration';
import Home from './components/Home';
import Mytasks from './components/Mytasks';

function Router(){
  return(
    <CookiesProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/dashboard" element={<Dashboard />}></Route>
    <Route path="/Registration" element={<Registration />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/mytask" element={<Mytasks />}></Route>
    </Routes>

    </BrowserRouter>
    </CookiesProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
