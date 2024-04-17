import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveAuthToken } from '../actions';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const dispatch = useDispatch();
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const postData = {
        email: email,
        password: password
      };
      
    axios.post('http://143.244.141.39:8003/auth/login/', postData)
    .then(response => {
        console.log('Login successful:', response.data);
        //localStorage.setItem('tokenid', response.data.token);
        Navigate('/home', { state: { tokenid: response.data.token } })
        const authToken  = response.data.token;
        dispatch(saveAuthToken(authToken));

        // Reset form fields and error state upon successful login
        setEmail('');
        setPassword('');
        setError(null);
    })
    .catch(error => {
        console.error('Error logging in:', error);
    });
     
    };
    const handleregSubmit = async (event) => {
        event.preventDefault();
        const postData = {
          username: username,
          email: email,
          password: password
        };
        
        axios.post('http://143.244.141.39:8003/auth/register/', postData)
        .then(response => {
            console.log('register successful:', response.status);
            //localStorage.setItem('tokenid', response.data.token);
            if (response.status === 201) {
                Navigate('/')
            //  const authToken  = response.data.token;
            //dispatch(saveAuthToken(authToken));
            }
            
            // Reset form fields and error state upon successful login
            setUsername('');
            setEmail('');
            setPassword('');
            setError(null);
        })
        .catch(error => {
            console.error('Error Register in:', error);
        });       
      };
    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <main className="main-content col-lg-5 mx-auto d-flex my-2 my-lg-4">
                    <div className="main-content-container container-fluid px-4">
                        <div className="card">
                            <div className="card-body login-form">
                                <ul className="nav nav-pills mb-3 border-bottom" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="login-text active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Login</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="login-text" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Register</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">                                   
                                    {error && <p style={{ color: 'red' }}>{error}</p>}
                                <form onSubmit={handleSubmit}>                                  
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                                        <input type="text" value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password"  value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control shadow-none"/>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="w-100 btn bg-primary bg-gradient py-2 text-white">Login Now</button>
                                    </div>  
                                    
                                    </form>                    
                                        <p className="my-2 sub-title"><span>Or login with</span></p>
                                        <div className="login-with-account mb-2">
                                            <ul className="d-flex list-unstyled mb-2">
                                                <li>
                                                    <Link to="https://www.facebook.com/" className="bg-primary text-white rounded-2 me-3 d-block text-center" target="_blank" rel="noreferrer"> 
                                                    <FontAwesomeIcon icon={faFacebook} /> Facebook</Link>
                                                </li>
                                                <li>
                                                    <Link to="https://google.com/" className="bg-danger text-white rounded-2 d-block text-center" target="_blank" rel="noreferrer">
                                                    <FontAwesomeIcon icon={faEnvelope} /> Google</Link>
                                                </li>
                                            </ul>
                                        </div>          
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                        <form onSubmit={handleregSubmit}>          
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="form-control shadow-none"/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control shadow-none"/>
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-none"/>
                                            </div>
                                            <div className="mb-3 form-check">
                                                <input type="checkbox" className="form-check-input shadow-none" id="exampleCheck1"/>
                                                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                            <div className="mb-1">
                                            <button type="submit" className="w-100 btn bg-primary bg-gradient btn-blue text-white fw-bold">Register</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    </div>
    )
}


export default Login;